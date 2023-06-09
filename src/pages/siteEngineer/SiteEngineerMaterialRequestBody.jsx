import { useState } from "react";
import useSiteEngineerTokenCheck from "../../customHooks/useSiteEngineerTokenCheck"
function SiteEngineerMaterialRequestBody() {
  const [materialRequests, setMaterialRequests] = useState([])

  useSiteEngineerTokenCheck("/siteengineer/dashboard", setMaterialRequests);
  console.log(materialRequests)

  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerMaterialRequestBody;
