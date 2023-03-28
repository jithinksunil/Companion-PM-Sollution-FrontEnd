import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postApi } from "../../api/axiosCalls";


function ProfileUpdate() {
  const superUser = useSelector((state) => state.superUser.value);
  const [name,setName]=useState(superUser?.name)
  const [email, setEmail] = useState(superUser?.email)
  const [companyName, setCompanyName] = useState(superUser?.companyName)
  const [password, setPassword] = useState('')
  const formData={name,email,companyName,password}

  const handleSubmit = (e) => {
    e.preventDefault()
    postApi('/updateprofile',formData,(response)=>{
      const {status,message}=response.data
      if(status){
        toast.success(message)
      }
      else{
        toast.error(message)
      }
    })
  }


  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
      <p>Update Profile</p>
      <form onSubmit={handleSubmit}>
        <input
        className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="text"
          value={companyName}
          onChange={(e)=>setCompanyName(e.target.value)}
          placeholder="Company name"
        />
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="text"
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Current password"
        />
        <div className="flex justify-center py-2">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
}

export default  ProfileUpdate
