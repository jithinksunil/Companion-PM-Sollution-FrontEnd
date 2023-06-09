import React, { useMemo } from 'react'
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";
import SiteEngineerProfileUpdate from "../../components/siteEngineer/SiteEngineerProfileUpdate"
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Profile from '../../components/common/Profile';
import updateImage from '../../hoc/UpdateImage';
import updateImageApi from '../../api/siteEngineer/updateImageApi';

function SiteEngineerProfileBody() {
    const siteEngineer = useSelector((state) => state.siteEngineer.value);
    const UpdateImageElement=useMemo(()=>updateImage(updateImageApi,siteEngineer,setSiteEngineer),[siteEngineer])
    return (
        <Fragment>
            <Profile individual={siteEngineer} setIndividual={setSiteEngineer} UpdateProfileElement={SiteEngineerProfileUpdate} UpdateImageElement={UpdateImageElement}/>
        </Fragment>
    )
}

export default React.memo(SiteEngineerProfileBody)