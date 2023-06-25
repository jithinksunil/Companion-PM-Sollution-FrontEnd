import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

function CommonForm({
  formName,
  fieldArray,
  submitFunction,
  submitButton,
  formValues
}) {
  const [formData, setFormData] = useState(() => formValues ? formValues : {})
  const handleLogin = (e) => {
    e.preventDefault();

    let allDropDownsSelected = true
    const dropDowns = fieldArray.filter(item => item.type == 'dropDown')
    dropDowns.map((item) => {
      if (!formData[item.field] || formData[item.field] == 'notSelected') {
        toast(`Please select ${item.field}`)
        allDropDownsSelected = false
      }
    })
    if (allDropDownsSelected) {
      let flag = true
      const alreadyCompared = {}
      fieldArray.forEach((item) => {
        if (item.validation) {//only items with validation is checking
          const validation = item.validation
          if (!validation.test(formData[item.field])) {
            toast(`Please enter a valid ${item.field}`)
            flag = false
          }
        }

        if (item.compareId && !alreadyCompared[item.compareId]) {
          const elements = document.getElementsByClassName(`${item.compareId}`)
          const reference = elements[0].value
          let success = true
          for (let i = 1; i < elements.length; i++) {
            if (elements[i].value != reference) {
              success = false
              flag = false
              break;
            }
          }
          if (!success) {
            toast(`${item.compareId} does not match`)
          }
          alreadyCompared[item.compareId] = true
        }
      })


      if (flag) {
        submitFunction(formData)
      }
    }
  }

  return (
    <div className="bg-white  rounded-lg px-10 py-10 shadow-black shadow-2xl text-center text-black">
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
          fieldArray.map((item, index) => {
            if (item.type == 'dropDown') {
              return (
                <select key={index} className="text-gray-900 mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  onChange={
                    (e) => {
                      setFormData({ ...formData, [item.field]: e.target.value })
                    }
                  }>
                  <option className='text-black' value='notSelected'>--Select--</option>
                  {
                    item.list.map((element) => {
                      return (
                        <option key={element.name} className='text-black' value={element?.value}>{element.name}</option>
                      )
                    })
                  }
                </select>
              )
            } else {
              return (
                <input key={index}
                  className={`${item.compareId ? item.compareId : ''} block my-2 rounded-xl h-9 border-gray-500 border px-3`}
                  required={item.required}
                  type={item.type}
                  placeholder={item.placeHolder}
                  value={formData[item.field]}
                  onChange={(e) => {
                    setFormData({ ...formData, [item.field]: e.target.value })
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
export default React.memo(CommonForm)
