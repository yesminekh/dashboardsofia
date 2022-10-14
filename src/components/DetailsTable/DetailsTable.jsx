
import { Badge, Col, Row, Space, Table } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Donneservice from '../../service/Donnes.service'

export default function DetailsTable () {
  const [datas, setData] = useState();
  
  
  useEffect(() => {
    const fetchData =  () =>{
      try {
        const data =    Donneservice.getAllData().then(response=>{setData((response.data.Donnes))});
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
      {
        title: 'Action',
        key: 'operation',
        render: (params) => 
        <Link to={"/Calendar/"+params.ts }>
        <div>Details</div>,
        </Link>
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

 