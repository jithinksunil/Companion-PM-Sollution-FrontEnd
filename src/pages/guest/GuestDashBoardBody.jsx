import { Fragment } from "react";
import useGuestTokenCheck from "../../customHooks/useGuestTokenCheck";

function GuestDashBoardBody() {
  useGuestTokenCheck("/guest/dashboard")
  return (
    <Fragment>
      <p className="text-white">Dashboard</p>

    </Fragment>
  );
}

export default GuestDashBoardBody;
