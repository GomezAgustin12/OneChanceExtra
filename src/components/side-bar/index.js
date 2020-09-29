import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  PhoneOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import './styles.css';

const { Sider } = Layout;

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const onToogleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible
      collapsed={!isMenuOpen}
      onCollapse={onToogleMenu}
    >
      <div className='logo' />
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
      >
        <Menu.Item key='1' icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          Mi Perfil
        </Menu.Item>
        <Menu.Item key='3' icon={<CalendarOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key='4' icon={<PlusCircleOutlined />}>
          Busqueda Laboral
        </Menu.Item>
        <Menu.Item key='5' icon={<PhoneOutlined />}>
          Anuncios
        </Menu.Item>
        <Menu.Item key='6' icon={<LogoutOutlined />}>
          Cerrar Sesion
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
