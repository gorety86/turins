import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
function App() {
    return (
  
        <BrowserRouter>
        <div>
        <Navbar />
              <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about-us" element={<AboutUs />}/>
                    <Route path="/our-services" element={<OurServices />}/>
                    <Route path="/contact-us" element={<ContactUs />}/>
                </Routes>
                <Footer/>
                </div>
        </BrowserRouter>
    )
}

export default App