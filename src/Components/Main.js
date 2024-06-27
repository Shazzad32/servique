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
import SecurityDispatch from "./SecurityDispatch";
import VirtualResourcing from "./VirtualResourcing";
import AccountingBookkeeping from "./AccountingBookkeeping";
import DigitalMarketing from "./DigitalMarketing";
import BlogDetail from "./BlogDetail";

const Main = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="service" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="career" element={<Career />} />
        <Route path="security" element={<SecurityDispatch />} />
        <Route path="virsual" element={<VirtualResourcing />} />
        <Route path="accounting" element={<AccountingBookkeeping />} />
        <Route path="marketing" element={<DigitalMarketing />} />
        {/* <Route path="/blog/:id" component={<BlogDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
