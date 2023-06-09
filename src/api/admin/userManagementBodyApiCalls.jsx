import { toast } from "react-toastify";
import { getApi } from "../axiosCalls";

export const handleClick = ({ setData, user }) => {
  getApi(
    `/admin/blockorunblock?id=${user._id}&status=${!user.status}`,
    (response) => {
      const { action, message } = response.data;
      if (action) {
        getApi("/admin/superusermanagement", (response) => {
          setData(response.data.superUsersData);
        });
      }
      toast(message);
    }
  );
};