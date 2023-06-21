import useFetchData from "../../customHooks/common/useFetchData";
import { fetchProjects } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerProjectBody() {
  const [projects,setProjects]=useFetchData(fetchProjects)
  console.log(projects,setProjects)
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerProjectBody;
