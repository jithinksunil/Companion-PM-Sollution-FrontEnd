import React from 'react'
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";
import SiteEngineerProfileUpdate from "../../components/siteEngineer/SiteEngineerProfileUpdate"
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Profile from '../../components/common/Profile';
import UpdateImage from '../../hoc/UpdateImage';
import updateImageApi from '../../api/siteEngineer/updateImageApi';

function SiteEngineerProfileBody() {
    const siteEngineer = useSelector((state) => state.siteEngineer.value);
    const UpdateImageElement=UpdateImage(updateImageApi,siteEngineer,setSiteEngineer)
    return (
        <Fragment>
            <Profile individual={siteEngineer} setIndividual={setSiteEngineer} UpdateProfileElement={SiteEngineerProfileUpdate} UpdateImageElement={UpdateImageElement}/>
        </Fragment>
    )
}

export default SiteEngineerProfileBody