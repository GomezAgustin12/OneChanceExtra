import React, { useEffect, useState } from 'react';
import { Button, Input, Layout, Select } from 'antd';
import './styles.css';
import { MainFooter, PageContent } from '../../../components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../redux';
import logo from '../../../assets/OneChance.png';

const { Header } = Layout;
const { Option } = Select;

const StudentLayout = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Layout className={'site-layout'}>
      <Layout>
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
            <Button type='text' onClick={() => history.push('/')}>
              Principal
            </Button>
            <Button type='text' onClick={() => history.push('/perfil')}>
              Perfil
            </Button>
            <Button
              className='logout'
              onClick={() => {
                dispatch(logout());
                history.push('/');
              }}
            >
              Cerrar Sesion
            </Button>
          </div>
        </Header>
        <PageContent className={'pageContent'}>{props.children}</PageContent>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default StudentLayout;
