import React, {  useEffect, useState } from 'react'
import CreateProject from './CreateProject'
import SuperUserTokenCheck from '../../customHooks/SuperUserTokenCheck';
import Modal from 'react-responsive-modal';
import DataTable from 'react-data-table-component';
import { getApi } from '../../api/axiosCalls';

function SuperUserProjectsBody() {

  const [data,setData]=useState({})
  const [search, setSearch] = useState('')
  const [openCreateProject, setOpenCreateProject] = useState(false)
  const onOpenCreateProject=()=>{setOpenCreateProject(true)}
  const onCloseCreateProject=()=>{setOpenCreateProject(false)}
  SuperUserTokenCheck('/project', setData)
  console.log(data);
  let projectManagersList=[]
  let projectsList=[]
  if(data.projectManagersList){
    projectManagersList=data.projectManagersList
  }
  if(data.projectsList){
    projectsList=data.projectsList
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Budget",
      selector: (row) => row.budget,
      sortable: true,
    },
    {
      name: "Place",
      selector: (row) => row.place,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => `Lat-${row.location.lati}, Lng-${row.location.longi}`,
    },
    {
      name: "Progress",
      selector: (row) => row.progress,
    },
    {
      name: "Project Manager",
      selector: (row) => row.projectManagerName,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    }
  ];

  useEffect(() => {
    getApi(
      `/project?search=${search}`,
      (response) => {
        const {  data } = response.data;
        setData(data);
      }
    );
  }, [search]);
  return (
    <div>
    <div className='pb-2'>
    <button
    onClick={onOpenCreateProject}
    className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl'
    >Add Project</button>
    </div>
      <DataTable
        title="Projects"
        fixedHeader
        columns={columns}
        data={projectsList}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            className="text-black rounded-lg px-2 border border-gray-300 "
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        }
        subHeaderAlign="center"
      />
      <Modal open={openCreateProject}
       onClose={onCloseCreateProject} 
       center
       showCloseIcon={false}
       >
      <CreateProject setData={setData} projectManagersList={projectManagersList}/>
      </Modal>
    </div>
  )
}

export default SuperUserProjectsBody
