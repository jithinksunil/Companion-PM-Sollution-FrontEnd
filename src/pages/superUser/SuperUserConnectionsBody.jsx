import React, { useState } from "react";
import useSuperUserTokenCheck from "../../customHooks/useSuperUserTokenCheck";
import Kankan from "../../components/common/Kankan";
import CommonForm from "../../components/common/CommonForm";
import { addConnection, projectDragAndDrop } from "../../api/superUser/connectionBodyApiCalls";
import ProjectDragAndDropTile from "../../components/superUser/ProjectDragAndDropTile";
import CenterModalContaier from "../../components/common/CenterModalContaier";
function SuperUserConnectionsBody() {
    const [projects, setProjects] = useState({});
    useSuperUserTokenCheck("/connections", setProjects)

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
                dataBaseFunction={projectDragAndDrop}
                setData={setProjects}
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
                    submitFunction={
                        ({ formData }) => {
                            addConnection(formData, setProjects)
                        }
                    }
                    submitButton="Submit" />
            </CenterModalContaier>
        </div>
    );
}

export default SuperUserConnectionsBody;
