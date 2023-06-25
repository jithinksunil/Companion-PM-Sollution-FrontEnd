import useFetchData from "../../customHooks/common/useFetchData";
import { fetchMaterialRequest } from "../../api/siteEngineer/fetchSiteEngineerData";
import React from "react";
function SiteEngineerMaterialRequestBody() {

  const [data,setData]=useFetchData(fetchMaterialRequest,'/siteEngineer/materialRequest','/siteEngineer/login',[]);
  console.log(data,setData)

  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default React.memo(SiteEngineerMaterialRequestBody);
