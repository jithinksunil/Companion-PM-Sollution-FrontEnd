import useFetchData from "../../customHooks/common/useFetchData";
import { fetchDashBoard } from "../../api/siteEngineer/fetchSiteEngineerData";
import React from "react";
function SiteEngineerDashBoardBody() {
const [data,setData]=useFetchData(fetchDashBoard,'/siteEngineer/login')
console.log(data+setData);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default React.memo(SiteEngineerDashBoardBody);
