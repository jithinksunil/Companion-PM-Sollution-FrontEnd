import mapboxgl from '!mapbox-gl'
import React, { useEffect, useRef, useState } from 'react';
import './map.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from 'react-toastify';
import { getApi } from '../../api/axiosCalls';


function Attendence({ url }) {
    // eslint-disable-next-line no-undef
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(10);

    const projectLongitude = 75.77788881455274
    const projectLatitude = 11.230035380783729

    function distanceFromCoordinates(lat1, lon1, lat2, lon2) {
        const pi = 0.017453292519943295; // Math.PI / 180
        const cos = Math.cos;
        const a = 0.5 - cos((lat2 - lat1) * pi) / 2 + cos(lat1 * pi) * cos(lat2 * pi) * (1 - cos((lon2 - lon1) * pi)) / 2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    const handleAttendenceMarking = (e) => {
        e.preventDefault()

        navigator.geolocation.getCurrentPosition((position) => {
            const long = parseFloat(position.coords.longitude)
            const lati = parseFloat(position.coords.latitude)
            const distance = distanceFromCoordinates(projectLatitude, projectLongitude, lati, long) // in km
            if (distance <= 200) {
                getApi(url, (resolve) => {
                    const { status, message } = resolve.data
                    if (status) {
                        toast.success(message)
                    }
                    else {
                        toast.error(message)
                    }
                })
            } else {
                toast.error('Outside the range of 6 km, Report your Senior')
            }
        })
    }

    useEffect(() => {
        console.log('1');
        if (map.current)
            return;


        // initialize map only once

        navigator.geolocation.getCurrentPosition((position) => {
            const long = position.coords.longitude
            const lati = position.coords.latitude

            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [
                    long, lati
                ],
                zoom: zoom
            });

            new mapboxgl.Marker().setLngLat([long, lati]).addTo(map.current);
            setLng(long)
            setLat(lati)
        })

    }, []);

    useEffect(() => {
        console.log('3');
        if (!map.current)
            return;


        // wait for map to initialize
        console.log('4');
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng}
                | Latitude: {lat}
                | Zoom: {zoom}
            </div>
            <div ref={mapContainer}
                className="map-container my-2" />
            <div className='flex justify-center'>
                <button className='text-center bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl'
                    onClick={handleAttendenceMarking}>Mark Attendence</button>
            </div>
        </div>
    );
}

export default React.memo(Attendence)
