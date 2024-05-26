import React from "react";
import logo from "../Images/logo.png";
import { TextField } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        background: "#007F73",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "60%",
          width: "90%",
          display: "flex",
          color: "white",
        }}
      >
        <div
          style={{
            flex: 2.5,
            display: "flex",
            alignItem: "center",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <img src={logo} style={{ height: "30%", width: "50%" }} alt="jj" />
          <p>
            Copyright @2024 Serviqore
            <br />
            All right reserved
          </p>
        </div>
        <div
          style={{
            flex: 2.5,
            display: "flex",
            alignItem: "center",
            flexDirection: "column",
            lineHeight: 0.7,
          }}
        >
          <motion.h3 whileHover={{ marginLeft: 10 }}>HOME</motion.h3>
          <motion.p whileHover={{ marginLeft: 10 }}>About Us</motion.p>
          <motion.p whileHover={{ marginLeft: 10 }}>Services</motion.p>
          <motion.p whileHover={{ marginLeft: 10 }}>Blogs</motion.p>
          <motion.p whileHover={{ marginLeft: 10 }}>Contacts us</motion.p>
        </div>
        <div
          style={{
            flex: 2.5,
            display: "flex",
            alignItem: "center",
            flexDirection: "column",
            lineHeight: 0.7,
          }}
        >
          {" "}
          <h3>Support</h3>
          <motion.p whileHover={{ marginLeft: 10 }}>
            Call Us +880 1900000000
          </motion.p>
          <motion.p whileHover={{ marginLeft: 10 }}>Terms of Services</motion.p>
          <motion.p whileHover={{ marginLeft: 10 }}>Privacy Policy</motion.p>
          <p></p>
        </div>
        <div
          style={{
            flex: 2.5,
            display: "flex",
            alignItem: "center",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <h3>Stay Up to date</h3>
          <TextField label="Your email address" style={{ width: "60%" }} />
          <motion.div
            style={{
              height: 50,
              width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <FacebookRoundedIcon />
            </motion.p>
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <InstagramIcon />
            </motion.p>
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <YouTubeIcon />
            </motion.p>
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <TelegramIcon />
            </motion.p>
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <LinkedInIcon />
            </motion.p>
            <motion.p whileHover={{ scale: 1.3 }} style={{ cursor: "pointer" }}>
              <WhatsAppIcon />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
