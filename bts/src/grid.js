import React from 'react';
import { Card, Col, Navbar, Row } from 'react-bootstrap';
import './App.css';

const SummaryStatistics = () => {
  const statistics = [
    { title: 'Total Users', value: '1,200', icon: '👤' },
    { title: 'Revenue', value: '$30,000', icon: '💰' },
    { title: 'Orders', value: '1050', icon: '📦' },
    { title: 'Conversion Rate', value: '2.5%', icon: '📈' },
  ];

  return (
    <Navbar expand="lg" className='tabs'>
    <Row>
      {statistics.map((stat, index) => (
        <Col key={index} className="card-style">
          <Card>
            <Card.Body>
              <Card.Title><b>{stat.icon} {stat.title}</b></Card.Title>
              <Card.Text><b>{stat.value}</b></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Navbar>
      
    
  );
};

export default SummaryStatistics;