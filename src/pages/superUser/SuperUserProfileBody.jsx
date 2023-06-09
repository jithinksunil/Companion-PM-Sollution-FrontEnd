import React, { Fragment } from 'react'
import Profile from '../../components/common/Profile'
import ChangeMembershipButton from '../../components/superUser/ChangeMembershipButton'
import { setSuperUser } from "../../store/slices/SuperUserSice";
import SuperUserProfileUpdate from "../../components/superUser/SuperUserProfileUpdate"
import { useSelector } from 'react-redux';

function SuperUserProfileBody() {
    const superUser = useSelector((state) => state.superUser.value);
   
    return (
        <Fragment>
            <Profile individual={superUser} setIndividual={setSuperUser} UpdateProfileElement={SuperUserProfileUpdate}>
                <ChangeMembershipButton superUser={superUser} />
            </Profile>
        </Fragment>
    )
}

export default SuperUserProfileBody