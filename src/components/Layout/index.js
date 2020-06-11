import React from 'react';

import { Layout } from 'antd';

import SideMenu from './SideMenu';
import Footer from './Footer';

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Content style={{ margin: '20px 16px' }}>{children}</Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
