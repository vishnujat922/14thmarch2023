//1. Import Area
import React from 'react'
import { Nav , Navbar , Button , Form , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from "../../logo.svg";
//2. Definition Area
export default function Navigation() {
    //2.1 Hooks Area

    //2.2 Function Definition Area

    //2.3 Return Statement
    return (
        <>
            <Navbar bg="light" expand="lg" className='h-100'>
                <Container  className='h-100'>
                    <Navbar.Brand href="#">
                    <img 
                        src={logo}
                        width="110px"
                        pt='50px'
                        className="d-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='btn btn-Link '>Home</Link>
                            <Link to="/login" className='btn btn-Link'>Login</Link>
                            <Link to="/register" className='btn btn-Link'>Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area