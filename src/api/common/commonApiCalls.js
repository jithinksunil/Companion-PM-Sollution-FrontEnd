import Cookies from "js-cookie";
import axios from "../../instances/axiosBaseUrl";
import { getApi } from "../axiosCalls";
import { toast } from "react-toastify";

export const updateImage = ({ image, dispatch, individual, setIndividual }) => {

  const formData = new FormData();
  formData.append("file", image);

  let detailsLink
  let updateLink;
  if (individual.position == "superUser") {
    updateLink = "/updateimage"
    detailsLink = "/profile"
  } else if (individual.position == "siteEngineer") {
    updateLink = "/siteengineer/updateimage"
    detailsLink = "/siteengineer/profile"
  } else if (individual.position == "projectManager") {
    updateLink = "/projectmanager/updateimage"
    detailsLink = "/projectmanager/profile"
  }
  axios
    .post(updateLink, formData, { withCredentials: true }, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {
      toast.success(response.data.message);

      getApi(
        detailsLink,
        (response) => {
          const { data } = response.data;
          console.log(data);
          dispatch(setIndividual(data));
        }
      );
    })
    .catch((err) => {
      console.log(err);
      toast.error("failed to update the image axios error");
    });
}

export const handleLogout = (logoutObject, navigate) => {
  getApi("/logout", (response) => {
    if (response.status) {
      Cookies.remove(logoutObject.token);
      toast.success(response.data.message);
      navigate(logoutObject.link);
    }
  });
}