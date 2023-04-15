import React, { useEffect, useState } from 'react'
import { postApi } from '../../api/axiosCalls'

function Messenger({individual}) {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [connections, setConnections] = useState([])
    const [recieverId, setRecieverId] = useState('')
    const [conversationId, setConversationId] = useState('')
    const userId=individual._id

    useEffect(()=>{
        let superUserId=individual._id
        if(individual.superUserId){
            superUserId=individual.superUserId
        }
        postApi('/chat/connectionlist',superUserId,(res)=>{
            setConnections(res.data.connections)
        })
    },[])

    const startChat=(recieverId)=>{

        postApi('/chat/startchat',{senderId:userId,recieverId},(res)=>{
            const {messages,conversationId,reciverId}=res.data
            setMessages(messages)
            setConversationId(conversationId)
            setRecieverId(reciverId)
        })
    }

    const sendMessage=()=>{
        postApi('/chat/sendmessage',{message:msg,conversationId,senderId:userId,recieverId},(res)=>{
            setMessages(res.data.messages)
            setMsg('')
        })
    }

  return (
    <div className="flex w-full h-full">
        
        <div className='w-3/4 h-full'>
        <div className='h-4/5 w-full bg-red-50 overflow-y-scroll scroll '>
        {messages.map((item,index)=>{
            return(
                <div key={index} className={`flex ${item.senderId===userId?"justify-end":''} px-3 py-1 w-full `}>
                <div key={index} className={`${item.senderId===userId?"bg-blue-300 text-right":"bg-red-300"} rounded-md w-48 p-2 `}>
                <p  >{item.message}</p>
                </div>
                </div>
            )
        })}
        </div>
        <div className='h-1/5 w-full bg-red-600'>
        <textarea value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button onClick={sendMessage}>send</button>
        
        </div>
        </div>


        <div className='w-1/3 bg-red-100'>
        {connections.map((item,index)=>{
            return(
                <p className='cursor-pointer' key={index} onClick={()=>{startChat(item?._id)}}>{item?.name?item?.name:item?._id}</p>
            )
        })}
        </div>
    </div>
  )
}

export default Messenger





            
