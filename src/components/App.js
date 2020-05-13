import React, {useState} from 'react';

import { Layout, Menu } from 'antd';
import { HomeOutlined, CommentOutlined } from '@ant-design/icons';


//import Counter from './Counter'
import Users from './Users'

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Users</span>
          </Menu.Item>
          <Menu.Item key="2">
            <CommentOutlined />
            <span>Comments</span>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '20px 16px' }}>
          <Users/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Cod3a ©2020
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
