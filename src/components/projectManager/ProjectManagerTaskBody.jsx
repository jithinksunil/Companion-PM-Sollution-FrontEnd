import { useEffect, useState } from "react";
import useProjectManagerTokenCheck from "../../customHooks/useProjectManagerTokenCheck";
import Kankan from "../common/Kankan";
import AddTask from "./AddTask";
import { taskAssignment } from "../../api/projectManager/taskBodyApiCalls";
import TaskAssignmentTile from "./TaskAssignmentTile";
import { useFirstProjectHighlighter } from "../../customHooks/projectManager/TaskBodyHooks";

function ProjectManagerTaskBody() {
  const [data, setData] = useState([])
  const [showSideBar, setShowSideBar] = useState(true)
  const [kankanData, setKankanData] = useState({})
  const [addButtonColumn, setAddButtonColumn] = useState('')
  useProjectManagerTokenCheck("/task", setData);
  const { projectId, setProjectId } = useFirstProjectHighlighter(data)

  useEffect(() => {
    let finalData = {};
    data.map((item) => {
      if (item.projectId == projectId) {
        finalData = item.onDutySiteEngineers
      }
    })
    setKankanData(finalData)

  }, [projectId, data])


  return (
    <div className="flex h-full w-full">
      <div className={`${showSideBar ? "w-60" : "w-16"} duration-300 h-full -ml-5 -mt-5  border-r border-white p-5 mr-5`}>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        {
          data.map((item, index) => {
            return (
              <div key={index} className={`p-3 ${projectId == item.projectId ? "bg-gray-800 bg-opacity-50 rounded-lg" : ''} overflow-hidden`}
                onClick={() => {
                  setProjectId(item.projectId)
                }}>
                <p>{item.name}</p>
              </div>
            )
          })
        }

      </div>
      <Kankan objectOfArrays={kankanData} setData={setData} Div={TaskAssignmentTile} dataBaseFunction={taskAssignment} addButton addButtonModalComponent={<AddTask setData={setData} addButtonColumn={addButtonColumn} projectId={projectId} />} setAddButtonColumn={setAddButtonColumn} />
    </div>
  )
}

export default ProjectManagerTaskBody;
