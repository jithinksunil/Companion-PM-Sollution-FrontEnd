import React from "react";
import CommonForm from "../../components/common/CommonForm";
import projectManagerLoginApi from "../../api/projectManager/projectManagerLoginApi";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import useTokenCheck from '../../customHooks/common/useTokenCheck'
import projectManagerTokenCheck from "../../api/projectManager/projectManagerTokenCheck";
import useLogin from "../../customHooks/common/useLogin";

function ProjectManagerLogginPage() {
  useTokenCheck(projectManagerTokenCheck,"/projectManager/dashboard")
  const projectManagerLoginFunction= useLogin(projectManagerLoginApi,setProjectManager,'projectManagerToken',"/projectManager/dashboard")
  return (
    <div className="background bg-black h-screen">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <CommonForm
          formName="Project manager"
          submitButton="Login"
          fieldArray={[
            { field: "userName", required: true, type: "text", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/, placeHolder: 'Enter company user name' },
            { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Enter password' },
          ]}
          submitFunction={projectManagerLoginFunction}
        />
      </div>
    </div>
  );
}

export default ProjectManagerLogginPage;