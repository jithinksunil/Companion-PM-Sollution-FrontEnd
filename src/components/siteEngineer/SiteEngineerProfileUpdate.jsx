import { useSelector } from "react-redux";
import CommonForm from "../common/CommonForm";
import { siteEngineerUpdateProfileApi } from "../../api/siteEngineer/profileBodyApiCalls";
import useUpdateProfile from "../../customHooks/common/useUpdateProfile";
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";

function SiteEngineerProfileUpdate() {

  const handleSubmitFunction=useUpdateProfile(siteEngineerUpdateProfileApi, setSiteEngineer)
  const siteEngineer = useSelector((state) => state.siteEngineer.value);
  const { name, email, companyName } = siteEngineer

  return (

    <CommonForm
      formName="Update Profile"
      submitButton="Submit"
      fieldArray={[
        { field: "name", required: true, type: "text", placeHolder: 'Name', value: name },
        { field: "companyName", required: true, type: "text", placeHolder: 'Company Name', value: companyName },
        { field: "email", required: true, type: "email", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, placeHolder: 'Email', value: email },
        { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Current password' },
      ]}
      submitFunction={handleSubmitFunction}
    />
  )
}

export default SiteEngineerProfileUpdate
