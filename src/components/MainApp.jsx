
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/topbar";
import'../components/pages/home/Home.css'
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";

function MainApp(){
  const { Header, Content, Sider } = Layout;
    return (
<Layout>
<Header className="header">
  <div className="logo" />
  <Topbar />
</Header>
<Layout
  style={{
    minHeight: '100vh',
  }}>
  <Sider >
    <Sidebar />
  </Sider>
  <Layout className="site-layout">
    <Content>
    <Outlet/>
     
    </Content>
  </Layout>
</Layout>
</Layout>
)
}
export default MainApp