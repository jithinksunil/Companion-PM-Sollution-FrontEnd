import { useState } from "react";
import useSiteEngineerTokenCheck from "../../customHooks/useSiteEngineerTokenCheck"
function SiteEngineerTasksBody() {
  const [tasks,setTasks]=useState([])
  
  useSiteEngineerTokenCheck("/siteengineer/dashboard",setTasks);
  console.log(tasks)
  
  return (
    <div>
    <p>jskldjfksdjfkljsdkl</p>

    </div>
  )
}

export default SiteEngineerTasksBody;
