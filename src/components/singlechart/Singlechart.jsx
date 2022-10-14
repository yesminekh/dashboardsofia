
import { Badge, Col, Row, Space, Table } from 'antd';
import React from 'react';
import { useEffect, useState } from "react";
import Donneservice from '../../service/Donnes.service'
import './Singlechart.css'


function App (Date){
  const [datas, setData] = useState();
  
  
  useEffect(() => {
    const fetchData =  () =>{
      try {
        const data =    Donneservice.getOneData(Date).then(response=>{setData((response.data.Donnes))});
        //setData(JSON.parse.response);
        // console.log(data);
        
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  console.log(datas)
  const columns = [
      {
        title: 'Date',
        dataIndex: 'ts',
   
      },
      {
          title: 'Status',
          key: 'status',
          render: (record) => (
            <span>
              <Badge status={record.status} />
              {record.status}
           </span>
          ),
        },
    
      
  ];
    

  return (
    
      <Table
        columns={columns}
        
        expandable={{ expandedRowRender: (response) => (
        <div style={{
        margin:'20px',
        alignItems:'center'}}>
        <Row gutter={16}>
       <Col  style={{color:'#00008B'}}  span={8}>Pression </Col>
       <Col span={8}>{response.Pression}</Col>
      </Row>
      <Row gutter={16}>
    <Col style={{color:'#82ca9d'}} span={8} >Temperature</Col>
    <Col span={8}>{response.Temperature}</Col>
    </Row>

    <Row gutter={16}>
    <Col  style={{color:'#FF5733'}} span={8}>Humidite</Col>
    <Col span={8}>{response.humidite}</Col>
   </Row></div> 
            ),
          }}
        dataSource={datas}
        rowKey='_id'
        size="middle"
        pagination={true}
        scroll={{y:300}}
      />
      
          );
};

 
export default App;