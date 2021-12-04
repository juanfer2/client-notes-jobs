import React from 'react'

import { Route, Navigate, useLocation, Outlet } from 'react-router-dom'
import { isAuth } from '../../middlewares/authentication.middleware'

function PrivateRoute({ component: Component, redirectTo, path, ...props }: any) {
  const auth = isAuth();
  let location = useLocation();

  if(!auth) {
    return <Navigate to='/login' state={{ from: location }}/>;
  }

 return <Outlet />;
}

export default PrivateRoute
