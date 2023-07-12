import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function RequireAuth({children,individual,navigateTo}) {
    const location=useLocation()
    if(!individual){
        return <Navigate to={navigateTo} replace={true} state={{path:location.pathname}} />
    }
  return children
}

export default RequireAuth