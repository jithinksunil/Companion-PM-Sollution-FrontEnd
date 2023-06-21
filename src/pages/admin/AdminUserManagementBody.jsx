import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import "react-toastify/dist/ReactToastify.css";
import useSearchHook from "../../customHooks/admin/useSearchHook";
import UserBlockUnBlockButton from "../../components/admin/UserBlockUnBlockButton";

function AdminUserManagementBody() {
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Company Name",
      selector: (row) => row.companyName,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => <UserBlockUnBlockButton row={row} fullData={data} setData={setData} />,
      sortable: true,
    },
  ];

  const { search, setSearch } = useSearchHook(setData)
  return (
    <Fragment>
      <DataTable
        title="Users"
        fixedHeader
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        actions={<button>Export</button>}
        subHeader
        subHeaderComponent={
          <input
            className="text-black"
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
    </Fragment>
  );
}

export default AdminUserManagementBody;

