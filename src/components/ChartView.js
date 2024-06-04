import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ChartView = ( {apiData, subData} ) => {

    const countEntities = (apiData) => {
        const counts = {};
        apiData.forEach(entity => {
          counts[entity[subData]] = (counts[entity[subData]] || 0) + 1;
        });
        const result = Object.keys(counts).map(key => ({ country: key, count: counts[key] }));
        return result;
    };
    
    const countedData = countEntities(apiData, subData);

    return (
        <BarChart width={600} height={500} data={countedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3572EF" />
        </BarChart>
    )
    }

export default ChartView

