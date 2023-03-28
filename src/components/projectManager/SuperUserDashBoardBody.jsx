import { Fragment } from "react";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import ProjectManagerTokenCheck from "../../customHooks/ProjectManagerTokenCheck";

function ProjectManagerDashBoardBody() {
  ProjectManagerTokenCheck("/projectmanager/dashboard", setProjectManager);
  return (
    <Fragment>
      <p className="text-white">pROJECT MANAGHER Dashboard</p>
    </Fragment>
  );
}

export default ProjectManagerDashBoardBody;
