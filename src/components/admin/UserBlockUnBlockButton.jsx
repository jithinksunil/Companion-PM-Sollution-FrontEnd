import React from "react";
import handleClick from "../../api/admin/userManagementBodyApiCalls";

function UserBlockUnBlockButton({ row,fullData, setData }) {
  const user = row;

  return (
    <button
      className={`${user.status
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
        } text-white font-bold py-2 px-4 rounded`}
      onClick={() => {handleClick(user._id, !user.status); user.status=!user.status; setData([...fullData]); }}
    >
      {user.status ? "Block" : "UnBlock"}
    </button>
  );
}

export default React.memo(UserBlockUnBlockButton)
