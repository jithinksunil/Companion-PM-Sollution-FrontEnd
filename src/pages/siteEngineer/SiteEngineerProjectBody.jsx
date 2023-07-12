import useFetchData from "../../customHooks/common/useFetchData";
import { fetchProjects } from "../../api/siteEngineer/fetchSiteEngineerData";
import React from "react";
function SiteEngineerProjectBody() {
  const [projects,setProjects]=useFetchData(fetchProjects,'/siteEngineer/login')
  console.log(projects,setProjects)
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default React.memo(SiteEngineerProjectBody)
