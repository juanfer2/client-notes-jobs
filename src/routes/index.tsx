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
import CreateQueries from '../modules/queries/createQueries'

// import NotFound from '../pages/notFound'
import PrivateRoute from './default/protectedRoutes'

function RoutesConfig() {
  
  const componentsProtected = [
    {
      path: '/dashboard', element: <ProjectsModule />
    },
    {
      path: '/dashboard/projects/:id', element: <DetailsProject />
    },
    {
      path: '/dashboard/projects/:id/queries/create', element: <CreateQueries />
    }
  ]

  const components = [
    {
      path: '/', element: <Home />
    },
    {
      path: '/register', element: <Register />
    },
    {
      path: '/login', element: <Login />
    },
    {
      path: '*', element: <div>Page not found</div>
    },
  ]

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        { componentsProtected.map((component: any, index: number) => 
          <Route key={index} path={component.path} element={component.element}/>)}
      </Route>

      { components.map((component: any, index: number) => 
          <Route key={index} path={component.path} element={component.element}/>)}
    </Routes>
  )
}

export default RoutesConfig
