import React from 'react';
import { Layout } from 'antd';
import './styles.css';
import { MainFooter, MainHeader, PageContent, SideBar } from '../../components';

const AppLayout = props => {
  return (
    <Layout className={'site-layout'}>
      <SideBar />
      <Layout>
        <MainHeader className={'header'} />
        <PageContent className={'pageContent'}>{props.children}</PageContent>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
