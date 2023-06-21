import useFetchData from "../../customHooks/common/useFetchData";
import { fetchDashBoard } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerDashBoardBody() {
const [data,setData]=useFetchData(fetchDashBoard,'/siteEngineer/dashboard','/siteEngineer/login')
console.log(data+setData);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerDashBoardBody;
