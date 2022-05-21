import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ( {isAuth, children} ) => {
 
  return isAuth 
  ? children
  : <Navigate to="/auth/login" />
}
