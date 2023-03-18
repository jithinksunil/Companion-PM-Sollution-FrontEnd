import React from 'react'

function Table({data,buttons={}}) {
  let Buttonjithin=undefined

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Sl no:</th>
                  {
                    
                    Object.keys(data[0]).map((column,index)=>{
                        return(
                        <th key={index} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        {column}
                        </th>
                        ) 
                    })
                  }
                  {
                    Object.keys(buttons).map((action,index)=>{
                      return(
                        <th key={index} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          {action}
                        </th>
                      )
                    })
                  }
                  
                </tr>
              </thead>
              <tbody>
                {
                    data.map((rowObject,index)=>{
                        return(
                            <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                {
                              
                                  Object.keys(rowObject).map((column,key)=>{
                                      return(
                                          <td key={key} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {rowObject[column]}
                                          </td>
                                      )
                                  })
                                }
                                {
                                  Object.keys(buttons).map((button,index)=>{
                                    return(
                                      <td  key={index}  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {Buttonjithin=buttons[button]}
                                        <Buttonjithin user={rowObject}/>
                                      </td>
                                    )
                                  })
                                }
                            </tr>
                        )
                    })
                }
                
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
