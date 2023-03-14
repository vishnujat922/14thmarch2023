//1. Import Area
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//2. Definition Area
export default function Navigation() {
    //2.1 Hooks Area

    //2.2 Function Definition Area

    //2.3 Return Statement
    return (
        <>
            <Nav>
                <Nav.Item>
                    <Link to="/" className='btn btn-link'>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/login" className='btn btn-link'>Login</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/register" className='btn btn-link'>Register</Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area