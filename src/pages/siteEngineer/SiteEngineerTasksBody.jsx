import useFetchData from "../../customHooks/common/useFetchData";
import { fetchTasks } from "../../api/siteEngineer/fetchSiteEngineerData";
import React from "react";
function SiteEngineerTasksBody() {
  const [tasks, setTasks] = useFetchData(fetchTasks,'/siteEngineer/tasks','/siteEngineer/login')
  console.log(tasks,setTasks);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>

    </div>
  )
}

export default React.memo(SiteEngineerTasksBody)
