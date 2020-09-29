import React from 'react';
import { Layout } from 'antd';
import './styles.css';

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      Aca va el encabezado
    </Header>
  );
};

export default MainHeader;
