import React, { Fragment, useEffect } from 'react'
import useCreateModal from '../../customHooks/common/useCreateModal'

function CenterModalContaier({openModalButtonId,children}) {
  const [modalState,openModalFunction] =useCreateModal('modal')
  useEffect(()=>{
    const button=document.getElementById(openModalButtonId)
    button?.addEventListener('click',openModalFunction)
    return(()=>{
        button?.removeEventListener('click',openModalFunction)
    })
  },[])

  return (
    <Fragment>
        {modalState&&(
        <div className='z-10 backdrop-blur-sm w-screen h-screen fixed top-0 left-0'>
          <div id='modal' className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default CenterModalContaier