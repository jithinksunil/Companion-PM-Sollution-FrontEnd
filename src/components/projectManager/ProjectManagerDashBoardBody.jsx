import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import ProjectManagerTokenCheck from "../../customHooks/ProjectManagerTokenCheck";

function ProjectManagerDashBoardBody() {
  
  ProjectManagerTokenCheck("/projectmanager/dashboard", setProjectManager);
  return (
    <div>


    </div>
  )
}

export default ProjectManagerDashBoardBody;
