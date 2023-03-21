import axios from '../../constants/axiosBaseUrl'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getApi } from '../../api/axiosCalls'

function UpdateImage({superUser,setSuperUser}) {

    const [image,setImage]=useState(null)
    const [selectedImage,setSelectedImage]=useState(null)
    const formData=new FormData()

    console.log(JSON.stringify(selectedImage));
    const handleSubmit=(e)=>{
      e.preventDefault()
      formData.append("file",image)
      console.log(superUser._id)
      axios.post(`/updateimage/${superUser._id}`,formData,{headers:{"Content-Type":"multipart/form-data"}}).then((response)=>{
      toast.success(response.data.message)
      getApi('/profile',(response)=>{
          const {superUserData} =response.data
          console.log(superUserData);
          setSuperUser(superUserData)},()=>{
            toast.error('cannot fetch user data now')}
          )
    }).catch((err)=>{console.log(err); toast.error('failed to update the image axios error')})
    }

  const url=`${superUser.image}`
  console.log(url);

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
      <div className="flex justify-center ">
        <img
          className=" w-40 h-40 py-2 rounded-full"
          src={selectedImage?`${selectedImage}`:`${url}`}
          alt="dfs"
        />
      </div>
      <p >Update Image</p>
      <form onSubmit={handleSubmit}>
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0])
            setSelectedImage( URL.createObjectURL(e.target.files[0]))
            console.log(URL.createObjectURL(e.target.files[0]));
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
}

export default UpdateImage
