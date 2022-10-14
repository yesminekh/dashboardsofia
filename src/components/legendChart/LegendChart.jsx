import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data} from'../../dummyData.jsx';
export default class LegendChart extends PureComponent {

    state = {
        opacity: {
          Pression: 1,
          Temeprature: 1,
          Humidite:1
        },
      };
    

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="Pression" strokeOpacity={opacity.Pression} stroke="#00008B" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Temperature" strokeOpacity={opacity.Temperature} stroke="#82ca9d" />
            <Line type="monotone" dataKey="Humidite" strokeOpacity={opacity.Humidite} stroke="#FF5733" />
          </LineChart>
        </ResponsiveContainer>
        <p className="notes">Tips: Hover the legend for more details </p>
      </div>
    );
  }
}
