import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='position-sticky bg-dark'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            {/* <Navbar.Brand href="#home">REACT-JS-TASKS</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav >
                <Nav.Link >
                  <Link to="/" className="text-decoration-none">LMS</Link>
                </Nav.Link>
                <Nav.Link  >
                  <Link to="/counternumber" className="text-decoration-none">COUNTER-NUMBER</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/formone" className="text-decoration-none">FORM-ONE</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/formtwo" className="text-decoration-none">FROM-TWO</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/formthree" className="text-decoration-none">FROM-THREE</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/useeffect1" className="text-decoration-none">USEEFFECT</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/formfour" className="text-decoration-none">FORM-FOUR</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/Weather" className="text-decoration-none">WEATHER-APP</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/registrationform" className="text-decoration-none">REGISTERTRATION-FORM</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/propsdrilling" className="text-decoration-none">PROPS-DRILLING</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/loginform" className="text-decoration-none">LOG-IN-FORM</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/card" className="text-decoration-none">MILTIPLE-CARD</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/context-task" className="text-decoration-none">USE-CONTEXT</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/dashboard" className="text-decoration-none">DASHBOARD</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/memotask" className="text-decoration-none">USE-MEMO</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/todolist" className="text-decoration-none">TO-DO-LIST</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default NavBar