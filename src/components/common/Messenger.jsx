import React, { useEffect, useRef, useState } from 'react'
import { postApi } from '../../api/axiosCalls'
import { toast } from 'react-toastify'
import {io} from 'socket.io-client'
import "./body.css";
import { useNavigate } from 'react-router-dom';

function Messenger({individual}) {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [connections, setConnections] = useState([])
    const [recieverId, setRecieverId] = useState('')
    const [conversationId, setConversationId] = useState('')
    const userId=individual._id
    const scrollRef=useRef()
    const navigate=useNavigate()

    //socket part start here
    const socket=useRef()
    const [recievedMessage, setRecievedMessage] = useState({})
    useEffect(()=>{
        // eslint-disable-next-line no-undef
        socket.current=(io(process.env.REACT_APP_WEB_SOCKET_SEVER_BASE_URL))
        socket.current.on("message",(data)=>{
            console.log('broadcast recieved');
            setRecievedMessage(data)
        })
        
    },[])

    useEffect(()=>{//to avoid displaying a message from a different user while chating with a user
        if(recievedMessage.senderId===recieverId){
            setMessages([...messages,recievedMessage])
        }else{
            console.log('worked');
        }
    },[recievedMessage])

    useEffect(()=>{
        socket.current?.emit('userId',userId)
    },[])
    //socket part end here
    

    useEffect(()=>{
        let superUserId;
        if(individual.superUserId){
            superUserId=individual.superUserId
        }else{
            superUserId=individual._id
        }
        postApi('/chat/connectionlist',{superUserId},(res)=>{
            setConnections(res.data.connections)
        })
    },[])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[recievedMessage,messages])

    const startChat=(recieverId)=>{
        
        postApi('/chat/startchat',{senderId:userId,recieverId},(res)=>{
            const {messages,conversationId,recieverId,errorMessage}=res.data
            console.log(res.data)
            setMessages(messages)
            setConversationId(conversationId)
            setRecieverId(recieverId)
            if(errorMessage){
                toast.error(errorMessage)
            }
        })
    }


    const sendMessage=()=>{
        postApi('/chat/sendmessage',{message:msg,conversationId,senderId:userId,recieverId},(res)=>{
            setMessages(res.data.messages)
            setMsg('')
            socket.current.emit("message",{message:msg,conversationId,senderId:userId,recieverId})
        })
    }

    const startVideoCall=(notifiedIndividualId)=>{
        function getRandom10DigitNumber() {
            const min = 1e9;
            const max = 1e10 - 1;
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        const url="/videocall/"+userId+getRandom10DigitNumber()+notifiedIndividualId
        navigate(url)
        const notification={
            notifiedIndividualId,
            notification:`${individual.name} want you to attend the video call`,
            event:{videoCallRequested:userId},
            url
        }
        postApi('/notification/create',notification,(res)=>{
            if(res.data.status){
                toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
        })
    }

  return (
    <div className="flex w-full h-full">
        <div className='w-1/4 px-3 border-r border-white'>
        {connections.map((item,index)=>{
            if(item._id!==userId&&item.name!=='unAssigned'){
                return(
                    <div  key={index} className={`flex justify-between items-center ${item._id==recieverId?'bg-blue-600':'bg-gray-100 text-black '} my-2 rounded py-1 px-3`}>
                    <p className='w-full cursor-pointer' onClick={()=>{startChat(item?._id)}}>{item?.name?item?.name:item?._id}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-full mr-5 md:flex cursor-pointer"
                            onClick={()=>{startVideoCall(item._id)}}
                            >
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                        </svg>
                    </div>
                )
            }
        })}
        </div>
        {
            recieverId?(
        <div className='w-3/4 h-full px-3'>
        <div className='h-5/6 w-full  overflow-y-scroll scroll scrollbar-hidden'>
        {messages.map((item,index)=>{
            return(
                <div key={index} className={`flex ${item.senderId===userId?"justify-end":''} py-1 w-full `}>
                <div ref={scrollRef} className={`${item.senderId===userId?"bg-blue-500 text-right":"text-black bg-gray-100 "} rounded-2xl p-2`}>
                <p  >{item.message}</p>
                </div>
                </div>
            )
        })}
        </div>
        <div className='h-1/6 w-full flex items-end justify-between'>
        <textarea className=" text-black w-full px-3 rounded mr-2" value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button className='rounded py-3 px-4 bg-blue-600 ' onClick={sendMessage}>send</button>
        
        </div>
        </div>
            ):(<div className='w-full h-full flex justify-center items-center'>
            <p className='font-bold text-5xl'>Select a chat</p>
            </div>)
        }
    </div>
  )
}

export default Messenger





            
