import { Button, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import map from "../Images/map.png";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
const Contacts = () => {
  return (
    <div
      style={{
        height: "110vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "80%",
            width: "100%",
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "85%",
              width: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                flex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "95%",
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "25%",
                    width: "100%",
                    lineHeight: 1,
                  }}
                >
                  <h1>Contact us</h1>
                  <div
                    style={{ width: 100, height: 7, background: "green" }}
                  ></div>
                  <p>Reach out to us for any query</p>
                </div>
                <div
                  style={{
                    height: "75%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: 20,
                  }}
                >
                  <TextField label="Name" style={{ width: "75%" }} />
                  <TextField label="Email" style={{ width: "75%" }} />
                  <TextareaAutosize
                    minRows={4}
                    maxRows={6}
                    label="Messages"
                    style={{ width: "75%" }}
                  />
                  <Button
                    style={{
                      width: "75%",
                      background: "blue",
                      color: "white",
                      height: 40,
                    }}
                  >
                    {" "}
                    Submited
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "95%", height: "95%" }}>
                <img
                  src={map}
                  style={{ width: "100%", height: "100%" }}
                  alt="dd"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              height: "15%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                width: "28%",
                height: "95%",
                display: "flex",
                border: "1px solid silver",
                borderRadius: 5,
              }}
            >
              <div style={{ width: "30%", height: "100%" }}>
                <RoomOutlinedIcon
                  style={{ width: "100%", height: "100%", color: "green" }}
                />
              </div>
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  lineHeight: 0.5,
                  fontSize: 14,
                }}
              >
                <p style={{ fontSize: 16, fontWeight: "bold" }}>Location</p>
                <p>Unit B7,House 19,Road 8,Shekhertek,</p>
                <p>Mohammadpur,Dhaka-1207</p>
              </div>
            </div>
            <div
              style={{
                width: "28%",
                height: "95%",
                display: "flex",
                border: "1px solid silver",
                borderRadius: 5,
              }}
            >
              <div style={{ width: "30%", height: "100%" }}>
                <DraftsOutlinedIcon
                  style={{ width: "100%", height: "100%", color: "green" }}
                />
              </div>
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  lineHeight: "10%",
                  fontSize: 14,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: "bold" }}>Email</p>
                <p>info@serviqore.com</p>
              </div>
            </div>
            <div
              style={{
                width: "28%",
                height: "95%",
                display: "flex",
                border: "1px solid silver",
                borderRadius: 5,
              }}
            >
              <div style={{ width: "30%", height: "100%" }}>
                <WifiCalling3OutlinedIcon
                  style={{ width: "100%", height: "100%", color: "green" }}
                />
              </div>
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  lineHeight: "10%",
                  fontSize: 14,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: "bold" }}>Phone</p>
                <p>+880 1777777777</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
