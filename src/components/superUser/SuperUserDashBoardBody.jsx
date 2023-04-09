import { Fragment } from "react";
import SuperUserTokenCheck from "../../customHooks/SuperUserTokenCheck";


function SuperUserDashBoardBody() {
  SuperUserTokenCheck("/dashboard")
  
  return (
    <Fragment>
      <p className="text-white">Dashboard</p>
    </Fragment>
  );
}

export default SuperUserDashBoardBody;
