import React from 'react'

function MainButton({textSize,onClick,children}) {
    return (
        <button 
        className={`bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl text-${textSize} shadow-xl `}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default React.memo(MainButton)