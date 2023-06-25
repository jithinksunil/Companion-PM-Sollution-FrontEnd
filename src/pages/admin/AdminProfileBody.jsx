import React, { Fragment, useState } from "react";
import useTokenCheck from '../../customHooks/common/useTokenCheck'
import adminTokenCheck from '../../api/admin/adminTokenCheck'

function AdminProfileBody() {
  useTokenCheck(adminTokenCheck,"/admin/dashboard")
  
  const [admin, setAdmin] = useState({});
  console.log(admin,setAdmin);
  return (
    <Fragment>
      <p className="text-white">profile</p>
    </Fragment>
  );
}

export default React.memo(AdminProfileBody);
