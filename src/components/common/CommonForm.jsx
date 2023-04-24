import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommonForm({
  formName,
  fieldArray,
  submitFunction
}) {

  const formData = { };
  const handleLogin = async (e) => {
    e.preventDefault();
    let flag=true
    fieldArray.forEach((item)=>{
      if(item.validation){
        const validation=item.validation
        if(!validation.test(formData[item.field])){
          toast(`Please enter a valid ${item.field}`)
          flag=false
        }
      }
    })

    if(flag){
      submitFunction(formData)
    }

  };

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
      <div className="flex justify-center ">
        <img
          className="w-32 py-2"
          src="https://res.cloudinary.com/df8w69xon/image/upload/v1678773094/Companion%20web%20application/companion/companion_vn1uma.png"
          alt=""
        />
      </div>
      <p>{formName}</p>
      <form onSubmit={handleLogin}>
      {
        fieldArray.map((item,index)=>{
          return(
            <input key={index}
          className="block my-2 rounded-xl h-9 border-gray-500 border px-3"
          required={item.required}
          type={item.type}
          placeholder={item.placeHolder}
          onChange={(e) => {
            formData[item.field]=(e.target.value);
          }}
        />
          )
        })
      }
        
        <div className="flex justify-center py-2">
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
}
export default CommonForm;
