import React from "react";
import Kankan from "../../components/common/Kankan";
import CommonForm from "../../components/common/CommonForm";
import { addConnectionApi, projectDragAndDropApi } from "../../api/superUser/connectionBodyApiCalls";
import ProjectDragAndDropTile from "../../components/superUser/ProjectDragAndDropTile";
import CenterModalContaier from "../../components/common/CenterModalContaier";
import useFetchData from '../../customHooks/common/useFetchData'
import { fetchConnections } from "../../api/superUser/fetchSuperUserData";
import useAddConnection from "../../customHooks/superUser/useAddConnection";
import useDragAndDrop from "../../customHooks/common/useDragAndDrop";

function SuperUserConnectionsBody() {

    const [projects, setProjects] = useFetchData(fetchConnections,'/superUser/connections','/', {})
    const handleAddConnection = useAddConnection(addConnectionApi, setProjects)
    const handleDragAndDrop=useDragAndDrop(projectDragAndDropApi,setProjects)

    return (
        <div className='h-full flex flex-col'>
            <div>
                <div className='pb-2'>
                    <button id='addConnectionButton'
                        className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl'>Add Connection</button>
                </div>
            </div>
            <Kankan objectOfArrays={projects}
                Div={ProjectDragAndDropTile}
                dataBaseFunction={handleDragAndDrop}
            />
            <CenterModalContaier openModalButtonId='addConnectionButton'>
                <CommonForm formName="Add Connection"
                    fieldArray={
                        [
                            {
                                field: 'connection',
                                type: 'text',
                                placeHolder: "Enter an email",
                                required: true,
                                validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            }, {
                                field: 'designation',
                                type: 'dropDown',
                                list: [
                                    {
                                        name: 'Site engineer',
                                        value: 'siteEngineer'
                                    }, {
                                        name: 'Project manager',
                                        value: 'projectManager'
                                    }
                                ]
                            }
                        ]
                    }
                    submitFunction={handleAddConnection}
                    submitButton="Submit" />
            </CenterModalContaier>
        </div>
    );
}

export default React.memo(SuperUserConnectionsBody);
