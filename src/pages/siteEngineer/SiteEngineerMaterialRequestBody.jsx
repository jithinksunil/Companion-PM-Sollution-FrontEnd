import useFetchData from "../../customHooks/common/useFetchData";
import { fetchMaterialRequest } from "../../api/siteEngineer/fetchSiteEngineerData";
function SiteEngineerMaterialRequestBody() {

  const [data,setData]=useFetchData(fetchMaterialRequest,[]);
  console.log(data,setData)

  return (
    <div>
      <p>jskldjfksdjfkljsdkl</p>
    </div>
  )
}

export default SiteEngineerMaterialRequestBody;
