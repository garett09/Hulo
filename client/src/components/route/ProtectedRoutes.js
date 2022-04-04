import React, { useContext, useEffect, useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


function ProtectedRoutes (){
const { isAuthenticated,isAdmin, loading, user } = useSelector(state => state.auth)
  if (loading === false ) {
      if (!isAuthenticated) return <Navigate to = "/login"/>
      if (isAdmin) return <Navigate to = "/ "/>
  }
  return <Outlet />;
}

export default ProtectedRoutes