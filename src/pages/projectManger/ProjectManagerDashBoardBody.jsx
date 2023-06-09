import useProjectManagerTokenCheck from "../../customHooks/useProjectManagerTokenCheck";

function ProjectManagerDashBoardBody() {
  
  useProjectManagerTokenCheck("/projectmanager/dashboard");
  
  return (
    <div>


    </div>
  )
}

export default ProjectManagerDashBoardBody;
