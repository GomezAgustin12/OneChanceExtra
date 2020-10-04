import React from 'react';
import { Button, Layout, Select } from 'antd';
import './styles.css';
import logo from '../../assets/logo.png';
import { Input } from 'antd';

const { Header } = Layout;
const { Option } = Select;

const MainHeader = () => {
  return (
    <Header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' height='50px' />
      </div>
      <div className='filter'>
        <Input placeholder='Search' />
        <Select
          defaultValue='Puesto'
          style={{ width: 120, justifySelf: 'start' }}
        >
          <Option value='puesto'>Puesto</Option>
          <Option value='empresa'>Empresa</Option>
        </Select>
        <Button>Buscar</Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '33%',
        }}
      >
        <h1>Menu</h1>
        <h1>Menu</h1>
      </div>
    </Header>
  );
};

export default MainHeader;
