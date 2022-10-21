import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useEffect, useState } from "react";
import Donneservice from '../../service/Donnes.service'
import {data} from'../../dummyData.jsx';

export default function Lineairechart  (){
  const [datas, setData] = useState();
  
  
  useEffect(() => {
    const fetchData =  () =>{
      try {
        const data =    Donneservice.getlastData().then(response=>{setData((response.data.Donnes))});
        //setData(JSON.parse.response);
        // console.log(data);
        
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  console.log(datas)

    return (
        <BarChart
          width={1000}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ts" />
          <YAxis />
          <Tooltip />
          <Legend  wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" fontSize={12} />
          <Bar dataKey="Pression" fill="#8884d8" />
          <Bar dataKey="Temperature" fill="#82ca9d" />
          <Bar dataKey="humidite" fill="#FF5733" />
        </BarChart>
    );
  
}
