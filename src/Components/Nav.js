// import React from "react";
// import logo from "../Images/logo.png";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <div
//       style={{
//         height: 100,
//         width: "100%",
//         background: "white",
//         display: "flex",
//         position: "fixed",
//       }}
//     >
//       <div style={{ flex: 5, display: "flex" }}>
//         <div
//           style={{
//             display: "flex",
//             flex: 2,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img src={logo} alt="logo" style={{ height: "75%", width: "60%" }} />
//         </div>
//         <div style={{ display: "flex", flex: 3 }}></div>
//       </div>
//       <div
//         style={{
//           flex: 5,
//           background: "",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-around",
//           color: "white",
//         }}
//       >
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link to="home" style={{ color: "white", textDecoration: "none" }}>
//             Home
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link to="aboutus" style={{ color: "white", textDecoration: "none" }}>
//             About
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link
//             to="/service"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Services
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link to="blogs" style={{ color: "white", textDecoration: "none" }}>
//             Blogs
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link to="career" style={{ color: "white", textDecoration: "none" }}>
//             Career
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link to="faq" style={{ color: "white", textDecoration: "none" }}>
//             FAQ
//           </Link>
//         </p>
//         <p
//           style={{
//             height: "50%",
//             width: 100,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 5,
//             background: "green",
//           }}
//         >
//           <Link
//             to="contacts"
//             style={{ color: "white", textDecoration: "none" }}
//           >
//             Contact us
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(""); // State to track the active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      style={{
        height: 100,
        width: "100%",
        background: "white",
        display: "flex",
        position: "fixed",
        zIndex: 100,
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <div style={{ flex: 5, display: "flex" }}>
        <div
          style={{
            display: "flex",
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "75%", width: "60%" }} />
        </div>
        <div style={{ display: "flex", flex: 3 }}></div>
      </div>
      <div
        style={{
          flex: 5,
          background: "",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          color: "white",
        }}
      >
        <NavLink
          to="home"
          className="nav-link"
          onClick={() => handleButtonClick("Home")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "Home" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "Home" ? "green" : "black",
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="service"
          className="nav-link"
          onClick={() => handleButtonClick("Service")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "Service" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "Service" ? "green" : "black",
          }}
        >
          SERVICE
        </NavLink>
        <NavLink
          to="aboutus"
          className="nav-link"
          onClick={() => handleButtonClick("About")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "About" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "About" ? "green" : "black",
          }}
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="blogs"
          className="nav-link"
          onClick={() => handleButtonClick("Blogs")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "Blogs" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "Blogs" ? "green" : "black",
          }}
        >
          BLOGS
        </NavLink>
        <NavLink
          to="career"
          className="nav-link"
          onClick={() => handleButtonClick("Career")}
          style={{
            height: "50%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "Career" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "Career" ? "green" : "black",
          }}
        >
          CAREER
        </NavLink>
        <NavLink
          to="faq"
          className="nav-link"
          onClick={() => handleButtonClick("FAQ")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "FAQ" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "FAQ" ? "green" : "black",
          }}
        >
          FAQ
        </NavLink>
        <NavLink
          to="contact"
          className="nav-link"
          onClick={() => handleButtonClick("Contact")}
          style={{
            height: "45%",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            textDecoration: "none",
            // background: activeButton === "Contact" ? "green" : "orange",
            fontWeight: "bold",
            color: activeButton === "Contact" ? "green" : "black",
          }}
        >
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
