import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify'
import { MyContext } from "../context/Context";

const updateImage = (upadateImageApi, individual, setIndividual) => {
  return React.memo(function NewComponent() {
    const [image, setImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const {setLoading}=useContext(MyContext)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      
      const formData = new FormData()
      formData.append('file', image)

      upadateImageApi(formData).then((res) => {
        const { status, data, message } = res.data
        if (status) {
          dispatch(setIndividual(data))
          toast.success(message)
        } else {
          toast.error(message)
        }
      }).catch(() => {
        toast.error('Axios error')
      }).finally(()=>setLoading(false))
    };

    const url = `${individual?.image}`;
    return (
      <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
        <div className="flex justify-center ">
          <img
            className=" w-40 h-40 py-2 rounded-full"
            src={selectedImage ? `${selectedImage}` : `${url}`}
            alt="dfs"
          />
        </div>
        <p>Update Image</p>
        <form onSubmit={handleSubmit}>
          <input
            className="block my-2 rounded-xl h-9 border-gray-900 border"
            required
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setSelectedImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <div className="flex justify-center py-2">
            <input
              type="submit"
              value="Update"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
            />
          </div>
        </form>
      </div>
    )
  })
}

export default updateImage;
