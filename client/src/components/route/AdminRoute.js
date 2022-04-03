import React, { Fragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { isAuthenticated, loading, user } = useSelector(state => state.auth)

  if (loading === false ) {
      if (!isAuthenticated) return <Navigate to = "/login"/>
      if (user.role === "admin") return <Navigate to = "/ "/>
  }
  return <Outlet />;
}




export default ProtectedRoute