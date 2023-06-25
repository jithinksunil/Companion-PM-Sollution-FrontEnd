import React, { Fragment, useMemo } from 'react'
import Profile from '../../components/common/Profile'
import ChangeMembershipButton from '../../components/superUser/ChangeMembershipButton'
import { setSuperUser } from "../../store/slices/SuperUserSice";
import SuperUserProfileUpdate from "../../components/superUser/SuperUserProfileUpdate"
import { useSelector } from 'react-redux';
import updateImageApi from '../../api/superUser/updateImageApi';
import updateImage from '../../hoc/UpdateImage';

function SuperUserProfileBody() {
    const superUser = useSelector((state) => state.superUser.value);
    const UpdateImageElement = useMemo(()=>updateImage(updateImageApi, superUser, setSuperUser),[superUser])

    return (
        <Fragment>
            <Profile individual={superUser} setIndividual={setSuperUser} UpdateProfileElement={SuperUserProfileUpdate} UpdateImageElement={UpdateImageElement}>
                <ChangeMembershipButton superUser={superUser} />
            </Profile>
        </Fragment>
    )
}

export default React.memo(SuperUserProfileBody)