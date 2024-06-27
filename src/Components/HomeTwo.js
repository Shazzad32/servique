import React from "react";
import image from "../Images/Group-713.png";
import { TextData, FeacherData, WhyChoiceUs } from "../datas";
import { Card } from "@mui/material";
import TopDiv from "./TopDiv";
import HomeSubFeature from "./HomeSubFeacher";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiHandCoinsThin } from "react-icons/pi";

const Home = () => {
  const itemData = FeacherData[0];
  return (
    <>
      <TopDiv
        title="Your Remote Security Dispatch Center"
        text="At Serviqore, we specialize in empowering Security guard companis with advanced remote monitoring and supervision solutions to enhance there operational efficiency and effectiveness."
        image={image}
      />
      <div
        style={{
          height: 300,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          {TextData.map((item, i) => {
            return (
              <>
                <p style={{ fontSize: 35, fontWeight: "bolder" }}>
                  A Customized Plan of action
                </p>
                <p style={{ fontSize: 20 }}>{item.text}</p>
              </>
            );
          })}

          <p></p>
        </div>
      </div>
      <div
        style={{
          height: 650,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "95%",
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {FeacherData.map((info, i) => {
            return (
              <Card
                style={{
                  height: "46%",
                  width: "32%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F5F2",
                }}
              >
                <div
                  style={{
                    flex: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#B3C8CF",
                    }}
                  >
                    {info.icon}
                  </div>
                </div>
                <div
                  style={{
                    flex: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2>{info.title}</h2>
                </div>
                <div
                  style={{
                    flex: 5.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "justify",
                    padding: 10,
                    marginTop: -20,
                  }}
                >
                  <p>{info.descrip}</p>
                </div>
              </Card>
            );
          })}
        </div>
        {/* <div
            style={{
              flex: 5,
              height: "50%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {FeacherData.map((text, i) => {
              return (
                <div
                  style={{
                    height: "100%",
                    width: "31%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    lineHeight: 1.2,
                    background: "red",
                  }}
                >
                  <img
                    src={text.image}
                    alt="11"
                    style={{ height: 100, width: 100, borderRadius: 50 }}
                  />
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      textAlign: "center",
                      lineHeight: 0.1,
                    }}
                  >
                    {text.title}
                  </p>
                  <p style={{ textAlign: "justify" }}>{text.descrip}</p>
                </div>
              );
            })}
          </div> */}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "100%", width: "80%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "space-around",
              textWrap: "wrap",
              gap: 20,
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          height: 500,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 400,
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "10%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Why Work with us</h1>
          </div>
          <div
            style={{
              height: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {WhyChoiceUs.map((item, i) => {
              return (
                <Card
                  style={{
                    height: "90%",
                    width: "24%",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }}
                >
                  <div
                    style={{
                      height: "30%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    style={{
                      height: "10%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h3 style={{}}>{item.title}</h3>
                  </div>
                  <div
                    style={{
                      height: "60%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "justify",
                    }}
                  >
                    <p style={{ fontSize: 16, padding: 10 }}>{item.descrip}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          height: 250,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          {TextData.map((item, i) => {
            return (
              <>
                <p style={{ fontSize: 35, fontWeight: "bolder" }}>
                  Get Started Today
                </p>
                <p style={{}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora culpa tempore quasi inventore quae! Quam corrupti
                  tempora
                </p>
              </>
            );
          })}

          <p></p>
        </div>
      </div>
    </>
  );
};

export default Home;
