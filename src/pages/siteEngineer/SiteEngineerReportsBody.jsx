import useFetchData from "../../customHooks/common/useFetchData";
import { fetchReports } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerReportsBody() {
const [reports,setReports]=useFetchData(fetchReports)
console.log(reports,setReports);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerReportsBody;
