import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import ChartWidget from './ChartWIdget';
import Footer from './Footer';

import SummaryStatistics from './grid';


function Sidebar()
{
  return(
<Navbar className="search-bar">
    
   
    <Navbar className = "Side-bar">
        
     
    <Container>
       <Navbar.Brand href="#home">
        
         <img
           src={require('./images/home-logo.jpg')}
           width="40"
           height="40"

           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
         
       </Navbar.Brand>
       
       <span className="flex-container">DashBoard</span>
       </Container>
     
   


   
       <Container>
       <Navbar.Brand href="#users">
         <img
           src={require('./images/users-logo.png')}
           width="40"
           height="40"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
       <span className="flex-container">Users</span>
       </Container>
     


   
       <Container>
       <Navbar.Brand href="#analytics">
         <img
           src={require('./images/analytics-logo.jpeg')}
           width="40"
           height="40"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
       <span className="flex-container">Analytics</span>
       </Container>
     
   



   
       <Container>
       <Navbar.Brand href="#Orders">
         <img
           src={require('./images/orders-logo.jpg')}
           width="40"
           height="40"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
       <span className="flex-container">Orders</span>
       </Container>
   
       <Container>
       <Navbar.Brand href="#settings">
         <img
           src={require('./images/settings-logo.jpg')}
           width="40"
           height="40"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
       <span className="flex-container">Settings</span>
       </Container>
     </Navbar>
     <SummaryStatistics/>
     </Navbar>


);
}


     export default Sidebar;