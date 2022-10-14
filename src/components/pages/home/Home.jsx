
import'../../chart/Chart.jsx'
import { Layout, Card, Col, Row } from 'antd';
import './Home.css'
import Lineairechart from '../../chart/Chart.jsx';
import Piecharts from '../../piechart/PieChart.jsx';
import LegendChart from '../../legendChart/LegendChart.jsx';
const {  Content} = Layout;
import DetailsTable from '../../DetailsTable/DetailsTable.jsx';



function Home ()  {
  return (
        <Content
          style={{
            margin: '0 16px',
          }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            <Row gutter={24}>

             <Col span={12}>
             <Card  bordered={false} >
             <Lineairechart/>
             </Card>
           </Col>
        
           <Col span={12}>
             <Card bordered={false}>
                <Piecharts/>

             </Card>
             
           </Col>
           </Row>


            <Row gutter={24}>
            <Col span={12}>
             <Card  bordered={false}>
                <LegendChart/>
             </Card>
           </Col>
           <Col span={10}>
             <Card  bordered={true} >
                <DetailsTable/>
             </Card>
           </Col>
        
             </Row>
          </div>
        </Content>
       
  
  );
};

export default Home;
