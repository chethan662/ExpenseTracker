// ExpenseTrends.js
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import './ExpenseTrends.css';

const ExpenseTrends = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += curr.amount;
    } else {
      acc[curr.category] = curr.amount;
    }
    return acc;
  }, {});

  const chartData = Object.keys(data).map((category) => ({ name: category, value: data[category] }));

  // Define a color palette for the pie chart
  const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'];

  return (
    <div className="expense-trends">
      <h2>Expense Trends</h2>
      <PieChart width={400} height={300}>
        <Pie dataKey="value" data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseTrends;
