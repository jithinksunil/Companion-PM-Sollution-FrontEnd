import { Fragment, useEffect } from "react";
import { setSuperUser } from "../../store/slices/SuperUserSice";
import SuperUserTokenCheck from "../../customHooks/SuperUserTokenCheck";


function SuperUserDashBoardBody() {
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
    })
  })
  
  SuperUserTokenCheck("/dashboard", setSuperUser);
  return (
    <Fragment>
      <p className="text-white">Dashboard</p>
    </Fragment>
  );
}

export default SuperUserDashBoardBody;
