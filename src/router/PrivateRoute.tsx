import { FunctionComponent } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: any
  redirectTo: string
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  children,
  redirectTo,
}) => {
  // CHECK IF USER IS AUTHENTICATED TO DO
  let isAuthenticated = true
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}
