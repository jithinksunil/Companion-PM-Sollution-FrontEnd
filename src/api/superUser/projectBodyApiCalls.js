import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"

export const addProject = ({ formData, setData }) => {
    postApi('/project/create', formData, (resolve) => {
        const { superUserTokenVerified, data, message } = resolve.data
        if (superUserTokenVerified) {
            if (data) {
                setData(data)
            }
            toast.success(message)
        } else {
            toast.error(message)
        }
    })
}