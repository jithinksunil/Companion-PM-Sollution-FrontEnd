import { useState } from "react";
import SiteEngineerTokenCheck from "../../customHooks/SiteEngineerTokenCheck"
function SiteEngineerTasksBody() {
  const [tasks,setTasks]=useState([])
  
  SiteEngineerTokenCheck("/siteengineer/dashboard",setTasks);
  console.log(tasks)
  
  return (
    <div>
    <p>jskldjfksdjfkljsdkl</p>

    </div>
  )
}

export default SiteEngineerTasksBody;
