import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Card, Navbar } from 'react-bootstrap';
import Footer from './Footer';

const ChartWidget = () => {
  // Sample data for the charts
  const data = [
    { name: 'Jan', sales: 4000, users: 2400 },
    { name: 'Feb', sales: 3000, users: 1398 },
    { name: 'Mar', sales: 2000, users: 9800 },
    { name: 'Apr', sales: 2780, users: 3908 },
    { name: 'May', sales: 1890, users: 4800 },
    { name: 'Jun', sales: 2390, users: 3800 },
    { name: 'Jul', sales: 3490, users: 4300 },
  ];

  return (
    
      <Navbar className="charts">  
      <Card className="chart1">
        <Card.Body>
          <h5>Sales Line Chart</h5>
          <LineChart width={1160} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h5>Users Bar Chart</h5>
          <BarChart width={1160} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </Card.Body>
      </Card>
      <Footer/>
      </Navbar>
    
    
  );
};

export default ChartWidget;