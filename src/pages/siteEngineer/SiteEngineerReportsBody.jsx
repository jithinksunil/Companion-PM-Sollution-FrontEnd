import useFetchData from "../../customHooks/common/useFetchData";
import { fetchReports } from "../../api/siteEngineer/fetchSiteEngineerData";
import React from "react";
function SiteEngineerReportsBody() {
const [reports,setReports]=useFetchData(fetchReports,'/siteEngineer/login')
console.log(reports,setReports);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default React.memo(SiteEngineerReportsBody)
