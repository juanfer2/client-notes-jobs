import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import {NavbarType} from './types'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';



function Navbar ({ name='myValue' }: NavbarType) {
  let navigate = useNavigate();
  const { Paragraph } = Typography;
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
      </Button>
    </Dropdown>
  );
  
  return (
    <PageHeader
      title="CoManZ"
      className="site-page-header"
      extra={[
        <Button key="3" onClick={ () => navigate(`/dashboard`) }>Dashboard</Button>,
        <Button key="2" onClick={ () => navigate(`/register`) }>Register</Button>,
        <Button key="1" type="primary" onClick={ () => navigate(`/login`) } >
          Login
        </Button>,
      ]}
    />
  )
}

// https://fettblog.eu/typescript-react/prop-types/
// visionamos\jvilladiego

//Navbar.propTypes = {
//  name: PropTypes.string.isRequired
//}

export default Navbar;


