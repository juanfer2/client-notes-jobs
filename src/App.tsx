import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { env } from './contants/api.constant'
import { isAuth } from './middlewares/authentication.middleware'
import RoutesConfig from './routes'
/** Actions */
import { healtAction } from './flux/actions/healt.action'
import { getUser } from './flux/actions/user.action'

import Navbar from './components/navbar'
import Home from './views/home'

function App() {
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)
    console.log(isAuth())
    console.log(!state.userReducer.user)

    if (isAuth() || !state.userReducer.user) {
      console.log('search')
      console.log(localStorage.getItem('token'))
      const startGetUser = () => dispatch(getUser())
      startGetUser()
    }

  }, [dispatch])
  console.log(state)
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <RoutesConfig/>
      </BrowserRouter>
    </div>
  )
}

export default App
