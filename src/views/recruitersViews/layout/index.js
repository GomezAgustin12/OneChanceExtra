import React, { useEffect, useState } from 'react';
import { Button, Layout, Select } from 'antd';
import './styles.css';
import { MainFooter, PageContent } from '../../../components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../redux';
import logo from '../../../assets/OneChance.png';
import { provincias, universities } from '../../../const';

const { Header } = Layout;
const { Option, OptGroup } = Select;

const RecruiterLayout = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [opt, setOpt] = useState('Provincia');
  const [prov, setProv] = useState([]);

  useEffect(() => {
    const keys = Object.keys(universities);
    setProv(keys);
  }, []);

  const onChange = value => {
    console.log(value);
    setOpt(value);
  };

  return (
    <Layout className={'site-layout'}>
      <Layout>
        <Header className='header'>
          <div className='logo'>
            <img src={logo} alt='logo' height='50px' />
          </div>
          <div className='filter'>
            {opt === 'Provincia' && (
              <>
                <Select style={{ width: 200 }} defaultValue='Buenos Aires'>
                  {provincias.map(provincia => (
                    <>
                      <Option value={provincia}>{provincia}</Option>
                    </>
                  ))}
                </Select>
              </>
            )}
            {opt === 'Universidad' && (
              <>
                <Select style={{ width: 450 }} placeholder='Elegir Universidad'>
                  {prov.map(provincia => (
                    <OptGroup label={provincia}>
                      {universities[provincia].map(university => (
                        <>
                          <Option value={university}>{university}</Option>
                        </>
                      ))}
                    </OptGroup>
                  ))}
                </Select>
              </>
            )}
            <Select
              defaultValue='Provincia'
              style={{ width: 120, justifySelf: 'start' }}
              onChange={onChange}
            >
              <Option value='Universidad'>Universidad</Option>
              <Option value='Provincia'>Provincia</Option>
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
            <Button type='text' onClick={() => history.push('/myposts')}>
              Mis Ofertas
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
              Cerrar Session
            </Button>
          </div>
        </Header>
        <PageContent className={'pageContent'}>{props.children}</PageContent>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default RecruiterLayout;
