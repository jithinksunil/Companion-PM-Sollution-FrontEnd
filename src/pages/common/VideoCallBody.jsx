import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import React from 'react'
import { useParams } from 'react-router-dom'

function VideoCallBody() {
    const {roomId}=useParams()
    const myMeeting=(element)=>{
        // eslint-disable-next-line no-undef
        const appId = process.env.REACT_APP_ZEGO_CLOUD_APP_ID;
        // eslint-disable-next-line no-undef
        const serverSecret = process.env.REACT_APP_ZEGO_CLOUD_SERVER_SECRET;
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(),  'User');
        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Send this link to connnect',
            // eslint-disable-next-line no-undef
            url:`${process.env.REACT_APP_VIDEO_CALL_URL}/room/${roomId}`
          }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton: true
      });

    }

  return (
    <div className="bg-gray-800 h-screen">
    <div className="mx-0 lg:mx-36 xl:mx-40" ref={myMeeting}/>
    </div>
  )
}

export default VideoCallBody
