import { Fragment, useState } from "react";

import useAdminTokenCheck from "../../customHooks/useAdminTokenCheck";

function AdminProfileBody() {
  const [admin, setAdmin] = useState({});
  console.log(admin);
  useAdminTokenCheck("/admin/profile", setAdmin);
  return (
    <Fragment>
      <p className="text-white">profile</p>
    </Fragment>
  );
}

export default AdminProfileBody;
