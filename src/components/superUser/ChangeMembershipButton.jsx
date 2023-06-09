import React from 'react'
import Membership from './Membership'
import CenterModalContaier from '../common/CenterModalContaier'

function ChangeMembershipButton({ superUser }) {
    return (

        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <button
                id='upgradeMembershipButton'
                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
            >
                Membership-{superUser?.membership}
            </button>
            {superUser?.place}
            <CenterModalContaier openModalButtonId='upgradeMembershipButton'>
                <Membership superUser={superUser} />
            </CenterModalContaier>
        </div>

    )
}

export default ChangeMembershipButton