import React from 'react';
import {useDispatch} from 'react-redux'
import { Button, Layout, Select } from 'antd';
import './styles.css';
import logo from '../../assets/OneChance.png';
import { Input } from 'antd';
import { logout } from '../../redux';

const { Header } = Layout;
const { Option } = Select;

const MainHeader = () => {
  const dispatch = useDispatch()
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
          width: '90%',
        }}
      >
        <h1>Menu</h1>
        <h1>Menu</h1>
        {/* <h1 onClick={dispatch(logout())}>Cerrar Sesion</h1> */}
        <Button className="logout" onClick={()=> dispatch(logout())}>Cerrar Session</Button>
      </div>
    </Header>
  );
};

export default MainHeader;
