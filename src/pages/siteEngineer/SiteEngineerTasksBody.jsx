import useFetchData from "../../customHooks/common/useFetchData";
import { fetchTasks } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerTasksBody() {
  const [tasks, setTasks] = useFetchData(fetchTasks,'/siteEngineer/login')
  console.log(tasks,setTasks);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>

    </div>
  )
}

export default SiteEngineerTasksBody;
