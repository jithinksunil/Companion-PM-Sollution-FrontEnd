import { handleClick } from "../../api/admin/userManagementBodyApiCalls";

function UserBlockUnBlockButton({ row, setData }) {
  const user = row;

  return (
    <button
      className={`${user.status
          ? "bg-red-500 hover:bg-red-600"
          : "bg-green-500 hover:bg-green-600"
        } text-white font-bold py-2 px-4 rounded`}
      onClick={() => { handleClick({ setData, user }) }}
    >
      {user.status ? "Block" : "UnBlock"}
    </button>
  );
}

export default UserBlockUnBlockButton
