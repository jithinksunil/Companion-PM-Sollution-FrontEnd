import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postApi } from '../../api/axiosCalls'

function NotificationsBody() {
    const [notifications, setNotifications] = useState([])
    const navigate=useNavigate()
    let individual=window.location.pathname.split('/')
    if(individual[1]==='superuser'){
        individual='superUser'
    }
    else if(individual[1]==='projectmanager'){
        individual='projectManager'
    }
    else if(individual[1]==='siteengineer'){
        individual='siteEngineer'
    }
    console.log(individual);
    useEffect(()=>{
        postApi('/notification',{individual},(res)=>{
            setNotifications(res.data.notifications)
        })
    },[])
    
    const activateClick=(url)=>{
        navigate(url)
    }
  return (
    <div>
    {
        notifications.map((item,index)=>{
            return(
                <div key={index} className={` bg-gray-800 bg-opacity-50 rounded my-1 ${item.url?"cursor-pointer":""}`} onClick={item.url?()=>{activateClick(item.url)}:""}>
                <p className="py-3 px-5" >
                {item.notification}
                </p>
                </div>
            )
        })
    }
      
    </div>
  )
}

export default NotificationsBody
