import React from 'react'
import CommonForm from '../common/CommonForm'
import { addTask } from '../../api/projectManager/taskBodyApiCalls'

function AddTask({addButtonColumn,setData,projectId}) {
  return (
    <div>
      <CommonForm 
      formName="Add task"
      fieldArray={[{field:'task',required:true,placeHolder:"enter a task",type:'text'}]}
      submitFunction={({formData})=>{addTask(addButtonColumn,formData,setData,projectId)}}
      submitButton="Submit"
      />
    </div>
  )
}

export default AddTask
