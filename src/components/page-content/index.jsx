import React from 'react';
import { Layout } from 'antd';
import './styles.css';

const { Content } = Layout;

const PageContent = (props) => {
  return (
    <Content
      style={{
        margin: '24px 16px 0',
        overflow: 'initial',
        // 64px header, 70px footer, 24px padding-top = 158px
        minHeight: 'calc(100vh - 158px)',
      }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: 'center', width: "80%", marginLeft: "auto", marginRight:"auto" }}
      >
        {props.children}
      </div>
    </Content>
  );
};

export default PageContent;
