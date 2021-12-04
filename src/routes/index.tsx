import React from 'react'
import { render } from "react-dom";
import {
  Route,
  Routes,
} from "react-router-dom";
import { isAuth } from '../middlewares/authentication.middleware'

import Home from '../views/home'
import Register from '../modules/auth/register'
import Login from '../modules/auth/login'
import ProjectsModule from '../modules/projects'
import DetailsProject from '../modules/projects/detailsProject'
// import NotFound from '../pages/notFound'
import PrivateRoute from './default/protectedRoutes'

function RoutesConfig() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<ProjectsModule />} />
        <Route path="/dashboard/projects/:id" element={<DetailsProject />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<div>Page not found</div>} />
    </Routes>
  )
}

export default RoutesConfig
