import React from 'react'
import { render } from "react-dom";
import {
  Route,
  Routes,
} from "react-router-dom";
import { isAuth } from '../middlewares/authentication.middleware'

import Home from '../views/home'
import Register from '../modules/auth/register'
// import NotFound from '../pages/notFound'
import PrivateRoute from './default/protectedRoutes'

function RoutesConfig() {


  // <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route path="/login" component={Login} />
// 
  //       <PrivateRoute exact path="/protected">
  //         {/*<...DetailProject />*/}
  //       </PrivateRoute>
// 
  //       <Route component={NotFound} />
  //     </Switch>

  return (
    <Routes>
     <Route element={<PrivateRoute />}>
        <Route path="/protected" element={<div>DivProtected</div>} />
        <Route path="/dashboard" element={<div>DivProtected das</div>} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default RoutesConfig
