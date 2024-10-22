import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import logo from './images/users-dropdown.png';
import { Container} from 'react-bootstrap';



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };



  return (

    <>
      <Navbar className='total'>

      <span className="textstyle"><h2>DashBoard</h2></span>

        <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Search</button>
    </form>

    <Container>
       <Navbar.Brand href="#notifications">
         <img
           src={require('./images/notifications-logo.png')}
           width="30"
           height="30"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
         />
       </Navbar.Brand>
       <span className="flex-container"></span>
       </Container>

    
    <NavDropdown title={<span><img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} /></span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User-Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              Activity
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">App Details</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

      </Navbar>
    </>
  );
};

const inputStyle = {
  width: '1100px', // Adjust width for a long search bar
  padding: '7px',
  fontSize: '16px',
  marginLeft: '100px',
};

const buttonStyle = {
  padding: '8px 7px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default SearchBar;