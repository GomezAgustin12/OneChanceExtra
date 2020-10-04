import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import './styles.css';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible
      collapsed={false}
      trigger={null}
    >
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
        <Menu.Item key='4' icon={<PlusCircleOutlined />}>
          Busqueda Laboral
        </Menu.Item>
        <Menu.Item key='6' icon={<LogoutOutlined />}>
          Cerrar Sesion
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
