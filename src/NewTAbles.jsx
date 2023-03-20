import React from 'react'

function Table({fields,data,setData,buttons={}}) {
  let ButtonPassed=true
  console.log(fields)
  return (
    <section className="container px-4 mx-auto">
        
        <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                    View all
                </button>
    
                <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    Monitored
                </button>
    
                <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    Unmonitored
                </button>
            </div>
    
            <div className="relative flex items-center mt-4 md:mt-0">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                        <path  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
    
                <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
        </div>
    
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">

            <tr>
            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">SlNo:</th>
            {
              
              Object.keys(data[0]).map((column,index)=>{
                if(column!='_id'&&column!="__v"&&column!='status'){
                  return(
                  <th key={index} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                  </th>
                  ) 
                }
              })
            }
            {
              Object.keys(buttons).map((action,index)=>{
                return(
                  <th key={index} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {action}
                  </th>
                )
              })
            }
            
          </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {
                data.map((rowObject,index)=>{
                    return(
                        <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" >
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{index+1}</td>
                            {
                          
                              Object.keys(rowObject).map((column,key)=>{
                                if(column!='_id'&&column!="__v"&&column!='status'){
                                  return(
                                      <td key={key} className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                      {rowObject[column]}
                                      </td>
                                  )
                                }
                              })
                            }
                            {
                              Object.keys(buttons).map((button,index)=>{
                                return(
                                  <td  key={index}  className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    {ButtonPassed=buttons[button]}
                                    <ButtonPassed rowObject={rowObject} setData={setData}/>
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

    <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-gray-500 dark:text-gray-400">
            Page <span className="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </a>

            <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
</section>
  )
}

export default Table
