import React from 'react'
import lowQuality from '../../layout/lowQuality.webp'
import Loading from '../../components/common/Loading'

function Processing() {
  return (
    <div className={`bg-cover bg-black background h-screen flex`}  style={{ backgroundImage:lowQuality }}>
        <Loading/>
    </div>
  )
}

export default Processing