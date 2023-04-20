import { useState } from "react";
import SiteEngineerTokenCheck from "../../customHooks/SiteEngineerTokenCheck"
function SiteEngineerProjectBody() {
  const [project,setProject]=useState({})
  
  SiteEngineerTokenCheck("/siteengineer/project",setProject);
  console.log(project)
  
  return (
    <div>
    <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerProjectBody;
