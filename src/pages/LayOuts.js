//1. Import Area
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import { Container } from 'react-bootstrap'
//2. Definition Area
export default function LayOuts() {
  return (
    <>
        <Container className='v_tbdr'>
           <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </Container>
    </>
  )
}
//2.1 Hooks Area

//2.2 Function Definition Area

//2.3 Return Statement

//3. Export Area
//3.1 Default Export Area
//3.2 Named export Area