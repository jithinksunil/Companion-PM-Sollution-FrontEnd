import { Fragment } from "react";
import useSuperUserTokenCheck from "../../customHooks/useSuperUserTokenCheck";


function SuperUserDashBoardBody() {
  useSuperUserTokenCheck("/dashboard")

  return (
    <Fragment>
      <p className="text-white">Dashboard</p>

    </Fragment>
  );
}

export default SuperUserDashBoardBody;
