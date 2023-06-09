import React, { useState } from 'react'
import CreateProject from '../../components/superUser/CreateProject'
// import useSuperUserTokenCheck from '../../customHooks/useSuperUserTokenCheck';
import DataTable from 'react-data-table-component';
import useSearchHook from '../../customHooks/superUser/useSearchHook';
import CenterModalContaier from '../../components/common/CenterModalContaier';

function SuperUserProjectsBody() {
  const [data, setData] = useState({})
  let projectManagersList = []
  let projectsList = []
  if (data.projectManagersList) {
    projectManagersList = data.projectManagersList
  }
  if (data.projectsList) {
    projectsList = data.projectsList
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

  // useSuperUserTokenCheck('/project', setData)
  const { search, setSearch } = useSearchHook(setData)

  return (
    <div>
      <div className='pb-2'>
        <button id='addProjectButton'
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
      <CenterModalContaier openModalButtonId='addProjectButton'>
        <CreateProject setData={setData} projectManagersList={projectManagersList} />
      </CenterModalContaier>
    </div>
  )
}

export default SuperUserProjectsBody
