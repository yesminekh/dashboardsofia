
import { CenterFocusStrong } from '@mui/icons-material';
import { color, style } from '@mui/system';
import { Card, Col, Row ,DatePicker, Space, Layout,Popover,Button} from 'antd';
import React from 'react';
import { useEffect, useState } from "react";
import Singlechart from '../../singlechart/Singlechart.jsx';
import PieCharts from '../../piechart/PieChart.jsx';
const {  Content} = Layout;
import Donneservice from '../../../service/Donnes.service'

function Calendarr (){
  
  
  
  
  const [datee,setdate] = useState();
  console.log('dateeeee',datee);
  const onChangeTime = (value, dateString) => {
    console.log("time", dateString);
   
    setdate(dateString);
    
  };
  const content = (
    <Col span={16}>
    <Card  bordered={false}>
       <PieCharts/>
     </Card>
   <Card  >
       <Singlechart/>

    </Card>
  </Col>
  );
  
  const onOk = () => {
    
    show(content)

  };
  const [datas, setData] = useState();
  
  
  useEffect(() => {
    const fetchData =  () =>{
      try {
        const data =    Donneservice.getOneData(datee).then(response=>{setData((response.data.Donnes))});
        //setData(JSON.parse.response);
        // console.log(data);
        
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  console.log(datas)

 
  return(
    <Content>
    
    <div
      className="site-layout-background"
      style={{
        padding: 20,
        minHeight: '100%',
      }}
    >
      <Row>
        <Row gutter={32}>
           <Col span={32}>
              <Card title="Select a date " bordered={false}>
                 <Row>
                    <Space direction="vertical" size={10}>
                       <DatePicker   className='site-calendar-customize-header-wrapper' showTime onChange={onChangeTime} onOk={onOk} />
                       
                     </Space>
                   </Row>
         <Col
            style={{
              padding:10
            }}>
              <label style={{color:'#0000ff' }}>Selected Date : </label>
         <span>{datee}</span>
         </Col>
               </Card>
             </Col>
             
            <Col span={16}>
              <Card  bordered={false}>
                <PieCharts/>
                  </Card>
              <Card  >
                <Singlechart/>
              </Card>
            </Col>
     </Row>
    </Row>
  </div>
  </Content>
);}

export default Calendarr;
