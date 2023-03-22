import { Fragment, useState } from 'react'

import AdminTokenCheck from '../../customHooks/AdminTokenCheck'

function AdminProfileBody() {
    const [admin, setAdmin] = useState({})
    console.log(admin);
    AdminTokenCheck('/admin/profile', setAdmin)
    return (
      <Fragment>
        <p className='text-white'>profile</p>
      </Fragment>
    )
}

export default AdminProfileBody
