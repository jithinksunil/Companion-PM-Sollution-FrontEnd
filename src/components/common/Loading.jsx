import React from 'react'
import './loading.css'

function Loading() {
  return (
    <span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10">
      <div className="lds-dual-ring"></div>
    </span>
  )
}

export default Loading