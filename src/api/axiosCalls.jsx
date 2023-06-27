import { toast } from "react-toastify";
import axios from "../instances/axiosInstance";

export const getApi = (
  endPoint,
  resolveCallback,
  rejectCallback = (err) => {
    console.log(err);
    toast.error("cannot get now: axios error");
  }
) => {
  axios
    .get(endPoint )
    .then(resolveCallback)
    .catch(rejectCallback);
};

export const postApi = (
  endPoint,
  body,
  resolveCallback,
  rejectCallback = (err) => {
    console.log(err);
    toast("cannot get now: axios error");
  }
) => {
  axios
    .post(endPoint, body )
    .then(resolveCallback)
    .catch(rejectCallback);
};
