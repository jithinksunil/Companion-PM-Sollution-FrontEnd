import React, { Fragment } from "react";
import useFetchData from '../../customHooks/common/useFetchData'
import { fetchDashBoard } from "../../api/superUser/fetchSuperUserData";


function SuperUserDashBoardBody() {
  const [data,setData]=useFetchData(fetchDashBoard,'/',[])
  console.log(data,setData)
  return (
    <Fragment>
      <p className="text-white">Dashboard</p>

    </Fragment>
  );
}

export default React.memo(SuperUserDashBoardBody)
