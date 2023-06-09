import React from 'react'
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";
import SiteEngineerProfileUpdate from "../../components/siteEngineer/SiteEngineerProfileUpdate"
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Profile from '../../components/common/Profile';

function SiteEngineerProfileBody() {
    const siteEngineer = useSelector((state) => state.siteEngineer.value);
    return (
        <Fragment>
            <Profile individual={siteEngineer} setIndividual={setSiteEngineer} UpdateProfileElement={SiteEngineerProfileUpdate}/>
        </Fragment>
    )
}

export default SiteEngineerProfileBody