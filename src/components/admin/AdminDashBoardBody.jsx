import { Fragment, useState } from 'react'
import AdminTokenCheck from '../../customHooks/AdminTokenCheck'


function AdminDashBoardBody() {
    const [admin, setAdmin] = useState({})

    console.log(admin);
    AdminTokenCheck('/admin/dashboard', setAdmin)
    
    return (
      <Fragment>
        <p className='text-white'>fs d f f f f f f f ff f ff f ff f f ff f ff f f ff f f f ff f ff ff f f ff f f ff f ff f f ff f f ff f f f ff f ff f f ff f f ff f s ds d  s d f sd f sd   fs d f sd f sd f   s df s df s d fs df s d  sd f sd f sd fs  d  sd f sd fs d f </p>
      </Fragment>
    )
}

export default AdminDashBoardBody
