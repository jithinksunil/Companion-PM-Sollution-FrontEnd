import {useEffect, useState} from "react";
import ProjectManagerTokenCheck from "../../customHooks/ProjectManagerTokenCheck";
import Kankan from "../common/Kankan";
import { postApi } from "../../api/axiosCalls";
import { toast } from "react-toastify";
import AddTask from "./AddTask";

function ProjectManagerTaskBody() {
    const [data, setData] = useState([])
    const [showSideBar, setShowSideBar] = useState(true)
    const [projectId, setProjectId] = useState('willAssign')
    const [kankanData, setKankanData] = useState({})
    const [addButtonColumn,setAddButtonColumn]=useState('')
    ProjectManagerTokenCheck("/task", setData);

    useEffect(()=>{
      if(projectId=='willAssign'){
        setProjectId('notAssingned')
      }else if(projectId=='notAssingned'){
        setProjectId(data[0]?.projectId)
      }
      
    },[data])
    
    useEffect(()=>{
      let finalData={};
      data.map((item)=>{
        if(item.projectId==projectId){
          finalData=item.onDutySiteEngineers
        }
      })
      setKankanData(finalData)

    },[projectId,data])

    
    
    function Div({element}){
      return(
        <div className="px-3 my-1 py-2 rounded bg-gray-800"><p className="text-white font-semibold">{element}</p></div>
      )
    }

    function dataBaseFunction(startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex){
      const data={startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex}
      postApi('/task/updatetaskassignment',data,(res)=>{
        setData(res.data.data)
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
                      <div key={index} className={`p-3 ${projectId==item.projectId?"bg-gray-800 bg-opacity-50 rounded-lg":''} overflow-hidden`} 
                      onClick={()=>{
                        setProjectId(item.projectId)
                      }}>
                        <p>{item.name}</p>
                      </div>
                    )
                  })
                }
                
            </div>
            <Kankan  objectOfArrays={kankanData} Div={Div} dataBaseFunction={dataBaseFunction} addButton addButtonModalComponent={ <AddTask setData={setData} addButtonColumn={addButtonColumn}/> }  setAddButtonColumn={setAddButtonColumn}/>
        </div>
    )
}

export default ProjectManagerTaskBody;
