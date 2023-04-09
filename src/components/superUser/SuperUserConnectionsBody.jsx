import React, { useState } from "react";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../api/axiosCalls";
import SuperUserTokenCheck from "../../customHooks/SuperUserTokenCheck";
import Kankan from "../common/Kankan";

function SuperUserConnectionsBody() {
  const [connection, setConnection] = useState(null);
  const [projects, setProjects] = useState([]);
  SuperUserTokenCheck("/connections",setProjects)
console.log(projects);

  function Div({element}){
    return(
      <div className=" m-3 p-3 rounded bg-gray-300"><p className="text-black">{element}</p></div>
    )
  }


  
  const handleAddUser = () => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(connection)) {
      toast("Please enter a valid email");
    } else {
      postApi("/addConnection", { connection }, (respose) => {
        toast.success(respose.data.message)
        getApi('/connections',(resolve)=>{
          console.log(resolve.data.data);
          console.log('ksalfsfsdfhjsdhfhsjdk');
          setProjects(resolve.data.data)
        })

      });
    }
  };

  function dataBaseFunction(startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex){
    const data={startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex}
    postApi('/updateprojectassignment',data,(res)=>{
        toast.success(res.data.message)
    })

}

  return (
    <div>
      <div>
      <input
        type="text"
        className="text-black"
        onChange={(e) => {
          setConnection(e.target.value);
        }}
      />
      <button className="border-red-100" onClick={handleAddUser}>
        Add User
      </button>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3">
      <Kankan  objectOfArrays={projects} setObjectOfArrays={setProjects} Div={Div} dataBaseFunction={dataBaseFunction} />
      </div>
    </div>
  );
}

export default SuperUserConnectionsBody;
