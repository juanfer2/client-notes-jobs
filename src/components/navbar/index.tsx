import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import {NavbarType} from './types'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { isAuth, logout } from '../../middlewares/authentication.middleware';


export type menuType = {
  name: string;
  url: string;
  type: "primary" | "link" | "text" | "ghost" | "default" | "dashed" | undefined
}

function Navbar ({ name='myValue' }: NavbarType) {
  let navigate = useNavigate();
  const privateRoutes: menuType[] = [
    { name: 'Dashboard', url: `/dashboard`, type: "default" },
    { name: 'Logout', url: '/', type: "primary" }
  ]

  const publicRoutes: menuType[] = [
    { name: 'Register', url: `/register`, type: "default" },
    { name: 'login', url: `/login`, type: "primary" }
  ]

  const logoutUser = (url: string) => {
    logout()
    navigate(url)
  }

  const renderMenu = (menuOptions: menuType[]) => {
    return menuOptions && menuOptions.map( (menu: menuType, index: number) =>(
      <Button key={index} 
        onClick={ 
          () => menu.name == 'Logout' ? logoutUser(menu.url) : navigate(menu.url) 
        } 
        type={menu.type}> 
        {menu.name} 
      </Button>)
    )
  }

  return (
    <PageHeader
      title="CoManZ"
      className="site-page-header"
      extra={
        isAuth() ? renderMenu(privateRoutes) : renderMenu(publicRoutes)
      }
    />
  )
}

// https://fettblog.eu/typescript-react/prop-types/
// visionamos\jvilladiego

//Navbar.propTypes = {
//  name: PropTypes.string.isRequired
//}

export default Navbar;


