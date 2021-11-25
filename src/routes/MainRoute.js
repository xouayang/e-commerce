import React from 'react'
import Links from '../components/Link';
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Register from '../pages/Register';
const MainRoute = () => {
    return (
        <>
         <Links/>   
         <Routes>
             <Route path ="/Contact" element={<Contact/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Cart" element={<Cart/>}/>
             <Route path="/Register" element={<Register/>}/>

         </Routes>
        </>
    )
}

export default MainRoute
