import React, { useMemo } from 'react'
import CreateProject from '../../components/superUser/CreateProject'
import DataTable from 'react-data-table-component';
import useSearchHook from '../../customHooks/superUser/useSearchHook';
import CenterModalContaier from '../../components/common/CenterModalContaier';
import useFetchData from '../../customHooks/common/useFetchData';
import { fetchProjects } from '../../api/superUser/fetchSuperUserData';

function SuperUserProjectsBody() {
  const [data, setData] = useFetchData(fetchProjects, '/superUser/projects', '/', {})
  const { search, setSearch } = useSearchHook(setData)
  const searchField = useMemo(() => {
    return (
      <input
        className="text-black rounded-lg px-2 border border-gray-300 "
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    )
  }, [search])

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
        subHeaderComponent={searchField}
        subHeaderAlign="center"
      />
      <CenterModalContaier openModalButtonId='addProjectButton'>
        <CreateProject setProjects={setData} projectManagersList={projectManagersList} />
      </CenterModalContaier>
    </div>
  )
}

export default React.memo(SuperUserProjectsBody)
