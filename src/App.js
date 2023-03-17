//1. Import Area
import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Register from './pages/Register'
import BusinessRegister from "./pages/BusinessRegister"
import LayOuts from './pages/LayOuts'
//2. Definition Area
export default function App() {
    //2.1 Hooks Area

    //2.2 Function Definition Area

    //2.3 Return Statement
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayOuts />}>
                  <Route index element={<Home />}></Route>
                  <Route path='detail' element={<Detail />}></Route>
                  <Route path='login' element={<Login />}></Route>
                  <Route path='register' element={<Register />}></Route>
                  { window.localStorage.getItem('jwt_token')!== undefined &&
                 
                  <Route path='business_register' element={<BusinessRegister />}></Route>
                  }
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area