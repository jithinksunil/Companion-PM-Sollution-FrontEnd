import React from 'react'

function MyModal({ modalState, children }) {
  return (
    <>
      {
        modalState && (
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            {children}
          </div>
        )
      }
    </>

  )
}

export default React.memo(MyModal)

