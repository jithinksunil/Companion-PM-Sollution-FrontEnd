import { useState } from "react";
import SiteEngineerTokenCheck from "../../customHooks/SiteEngineerTokenCheck"
function SiteEngineerMaterialRequestBody() {
  const [materialRequests,setMaterialRequests]=useState([])
  
  SiteEngineerTokenCheck("/siteengineer/dashboard",setMaterialRequests);
  console.log(materialRequests)
  
  return (
    <div>
    <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerMaterialRequestBody;
