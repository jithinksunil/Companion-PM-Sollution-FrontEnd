import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommonForm({
  formName,
  fieldArray,
  submitFunction,
  submitButton
}) {

  const formData = { };
  const handleLogin = async (e) => {
    e.preventDefault();
    let allDropDownsSelected=true
    const dropDowns=fieldArray.filter(item=>item.type=='dropDown')
    console.log(dropDowns);
    console.log(formData);
    dropDowns.map((item)=>{
      console.log(formData[item.field]);
      if(!formData[item.field]||formData[item.field]=='notSelected'){
        toast(`Please select ${item.field}`)
        allDropDownsSelected=false
      }
    })
    if(allDropDownsSelected){
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
          if(item.type=='dropDown'){
            return(
              <select key={index} className="text-gray-900 mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            onChange={
                (e) => {
                    formData[item.field]=e.target.value
                }
            }>
            <option className='text-black' value='notSelected'>--Select--</option>
            {
              item.list.map((element)=>{
                return(
                  <option key={element.name} className='text-black' value={element.value}>{element.name}</option>
                )
              })
            }
            </select>
            )
          }else{
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
          }

        })
      }
        
        <div className="flex justify-center py-2">
          <input
            type="submit"
            value={submitButton}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
}
export default CommonForm;
