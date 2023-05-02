import React, {useState} from "react";
import {toast} from "react-toastify";
import {postApi} from "../../api/axiosCalls";
import SuperUserTokenCheck from "../../customHooks/SuperUserTokenCheck";
import Kankan from "../common/Kankan";
import Modal from "react-responsive-modal";
import CommonForm from "../common/CommonForm";
import {addConnection} from "../../api/superUser/connectionBodyApiCalls";
function SuperUserConnectionsBody() {
    const [projects, setProjects] = useState({});
    const [openAddConnection, setOpenAddConnection] = useState(false)
    const onOpenAddConnection = () => {
        setOpenAddConnection(true)
    }
    const onCloseAddConnection = () => {
        setOpenAddConnection(false)
    }

    SuperUserTokenCheck("/connections", setProjects)

    function Div({element}) {
        return (
            <div className="px-3 my-1 py-2 rounded bg-gray-800">
                <p className="text-white font-semibold">
                    {element}</p>
            </div>
        )
    }

    function dataBaseFunction(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex) {
        const data = {
            startColumn,
            dragStartIndex,
            movingItem,
            endColumn,
            dragEnterIndex
        }
        postApi('/updateprojectassignment', data, (res) => {
            setProjects(res.data.data)
            toast.success(res.data.message)
        })

    }

    return (
        <div className='h-full flex flex-col'>
            <div>
                <div className='pb-2'>
                    <button onClick={onOpenAddConnection}
                        className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl'>Add Connection</button>
                </div>
            </div>
            <Kankan objectOfArrays={projects}
                Div={Div}
                dataBaseFunction={dataBaseFunction}/>


            <Modal open={openAddConnection}
                onClose={onCloseAddConnection}
                center
                showCloseIcon={false}>
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
                        (formData) => {
                            addConnection(formData, setProjects)
                        }
                    }
                    submitButton="Submit"/>
            </Modal>
    </div>
    );
}

export default SuperUserConnectionsBody;
