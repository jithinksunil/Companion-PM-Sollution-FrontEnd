import React from 'react'
import CommonForm from '../../components/common/CommonForm'
import {addProject} from '../../api/superUser/projectBodyApiCalls'

function CreateProject({setData, projectManagersList}) {

    const projectManagers = []
    projectManagersList.map((item) => {
        const element = {}
        element.name = item.name
        element.value = item._id
        projectManagers.push(element)
    })
    return (<CommonForm formName="Add project"
        fieldArray={
            [
                {
                    field: 'name',
                    type: 'text',
                    placeHolder: "Name",
                    required: true
                },
                {
                    field: 'place',
                    type: 'text',
                    placeHolder: "Place",
                    required: true
                },
                {
                    field: 'budget',
                    type: 'number',
                    placeHolder: "Budget",
                    required: true
                },
                {
                    field: 'lati',
                    type: 'number',
                    placeHolder: "Latitude",
                    required: true
                }, {
                    field: 'longi',
                    type: 'number',
                    placeHolder: "Longitude",
                    required: true
                }, {
                    field: 'projectManagerId',
                    type: 'dropDown',
                    list: [... projectManagers]
                }
            ]
        }
        submitFunction={
            ({formData}) => {
                addProject({formData, setData})
            }
        }
        submitButton="Add project"/>)
}

export default CreateProject
