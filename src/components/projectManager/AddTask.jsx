import React from 'react'
import CommonForm from '../common/CommonForm'
import { addTask } from '../../api/projectManager/taskBodyApiCalls'
import { toast } from 'react-toastify'

function AddTask({ addButtonColumn, projectId, setData }) {
  const handleSubmit = (formData) => {
    addTask(formData, addButtonColumn, projectId).then((response) => {
      toast.success(response.data.message)
      if (response.data.data) {
        setData(response.data.data)
      }
    }
    ).catch(() => {
      toast.error('axios error')
    })
  }

  return (
    <div>
      <CommonForm
        formName="Add task"
        fieldArray={[{ field: 'task', required: true, placeHolder: "enter a task", type: 'text' }]}
        submitFunction={handleSubmit}
        submitButton="Submit"
      />
    </div>
  )
}

export default AddTask
