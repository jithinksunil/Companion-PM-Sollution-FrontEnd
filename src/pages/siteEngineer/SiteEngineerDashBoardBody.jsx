import useFetchData from "../../customHooks/common/useFetchData";
import { fetchDashBoard } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerDashBoardBody() {
const [data,setData]=useFetchData(fetchDashBoard)
console.log(data+setData);
  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerDashBoardBody;
