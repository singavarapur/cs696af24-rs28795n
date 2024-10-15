import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Intro from "./intro"

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to ={'/intro'}>Introduction</Link>
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Routes>
            <Route path="/intro" element={<Intro/>}></Route>
            <Route path="/" element={"welcome home"} ></Route>

            </Routes>
            
    </div>
  );
}

export default App;
