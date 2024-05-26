import React from "react";
import Home from "./Home";
import Services from "./Services";
import Blogs from "./Blogs";
import Faq from "./Faq";
import Aboutus from "./Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Career from "./Career";
import Contacts from "../Components/Contacts";

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="career" element={<Career />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
