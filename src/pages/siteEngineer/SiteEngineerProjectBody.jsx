import { useState } from "react";
import useSiteEngineerTokenCheck from "../../customHooks/useSiteEngineerTokenCheck"
function SiteEngineerProjectBody() {
  const [project, setProject] = useState({})

  useSiteEngineerTokenCheck("/siteengineer/project", setProject);
  console.log(project)

  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerProjectBody;
