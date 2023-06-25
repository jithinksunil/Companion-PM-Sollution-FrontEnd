import React, { Fragment } from "react";
import useFetchData from "../../customHooks/common/useFetchData";
import { fetchDashBoard } from "../../api/admin/fetchAdminData";

function AdminDashBoardBody() {
  const [data,setData]=useFetchData(fetchDashBoard,'/admin/dashboard','/admin/login',[ ])
  console.log(data,setData);

  return (
    <Fragment>
      <p className="text-white">
        fs d f f f f f f f ff f ff f ff f f ff f ff f f ff f f f ff f ff ff f f
        ff f f ff f ff f f ff f f ff f f f ff f ff f f ff f f ff f s ds d s d f
        sd f sd fs d f sd f sd f s df s df s d fs df s d sd f sd f sd fs d sd f
        sd fs d f{" "}
      </p>
    </Fragment>
  );
}

export default React.memo(AdminDashBoardBody);
