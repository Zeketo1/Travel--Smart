import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from "../pages/contact/Contact";
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';



const AppRoute = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default AppRoute