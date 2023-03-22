import { Fragment } from 'react'
import { setSuperUser } from '../../store/slices/SuperUserSice'
import SuperUserTokenCheck from '../../customHooks/SuperUserTokenCheck'

function SuperUserDashBoardBody() {
    SuperUserTokenCheck('/dashboard',setSuperUser)
    return (
      <Fragment>
        <p className='text-white'>Dashboard</p>
      </Fragment>
    )
}

export default SuperUserDashBoardBody
