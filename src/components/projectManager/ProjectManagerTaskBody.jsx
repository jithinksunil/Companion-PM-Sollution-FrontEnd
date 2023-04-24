import {useEffect, useState} from "react";
import ProjectManagerTokenCheck from "../../customHooks/ProjectManagerTokenCheck";
import Kankan from "../common/Kankan";
import { postApi } from "../../api/axiosCalls";
import { toast } from "react-toastify";

function ProjectManagerTaskBody() {
    const [data, setData] = useState([])
    const [showSideBar, setShowSideBar] = useState(true)
    const [projectId, setProjectId] = useState('')
    const [kankanData, setKankanData] = useState({})

    ProjectManagerTokenCheck("/task", setData);

    useEffect(()=>{
      setProjectId(data[0]?.projectId)
      
    },[data])
    
    useEffect(()=>{
      let finalData={};
      data.map((item)=>{
        if(item.projectId==projectId){
          finalData=item.onDutySiteEngineers
        }
      })

      console.log(projectId);
      setKankanData(finalData)
      console.log(finalData);
    },[projectId])

    
    
    function Div({element}){
      return(
        <div className="px-3 my-1 py-2 rounded bg-gray-800"><p className="text-white font-semibold">{element}</p></div>
      )
    }

    function dataBaseFunction(startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex){
      const data={startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex}
      postApi('/task/updatetaskassignment',data,(res)=>{
          toast.success(res.data.message)
      })
    }
    

    return (
        <div className="flex h-full w-full">
            <div className={`${showSideBar?"w-60":"w-16"} duration-300 h-full -ml-5 -mt-5  border-r border-white p-5 mr-5`}>
                <div className="mt-7 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={
                        `w-8 h-8 mr-5 cursor-pointer`
                    }
                    onClick={
                        () => {
                            setShowSideBar((showSideBar) => !showSideBar);
                        }
                }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
                </div>

                {
                  data.map((item,index)=>{
                    return (
                      <div key={index} className={`p-3 ${projectId==item.projectId?"bg-gray-800 bg-opacity-50 rounded-lg":''} overflow-hidden`} onClick={()=>{
                        setProjectId(item.projectId)
                      }}>
                        <p>{item.name}</p>
                      </div>
                    )
                  })
                }
                
            </div>
            <Kankan  objectOfArrays={kankanData} setObjectOfArrays={setKankanData} Div={Div} dataBaseFunction={dataBaseFunction} addButton />
        </div>
    )
}

export default ProjectManagerTaskBody;
