import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
   { name: "January", Total: 1400 },
   { name: "February", Total: 100 },
   { name: "March", Total: 300 },
   { name: "April", Total: 400 },
   { name: "May", Total: 700 }
  ];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
       <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>

            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>

            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>

        </defs>
        <XAxis dataKey="name" />
        <YAxis />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />

        </AreaChart>
        </ResponsiveContainer>
  )
}

export default Chart