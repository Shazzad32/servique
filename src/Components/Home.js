import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSlideShow from "./HomeSlideShow";
import { HedderData, Testimonials, FeacherData } from "../datas";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Card, InputAdornment, TextField } from "@mui/material";

import image2 from "../Images/about2.png";
import im1 from "../Images/one.png";
import im2 from "../Images/two.png";
import im3 from "../Images/three.png";
import im4 from "../Images/four.png";
import im5 from "../Images/five.png";
import im6 from "../Images/six.png";
import im7 from "../Images/seven.png";
import Cote from "../Images/cotation.png";
import supervision from "../Images/supervision.png";
import FaqComp from "./FaqComp";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ height: "14vh", width: "100%" }}></div>
        <div
          style={{
            height: "86vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 600,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 600,
                width: "80%",
              }}
            >
              <Slider {...settings}>
                {HedderData.map((item, index) => (
                  <div key={index}>
                    <HomeSlideShow
                      title={item.title}
                      text={item.text}
                      image={item.image}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 320,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "100%", width: "80%", textAlign: "center" }}>
          <p style={{ fontSize: 44, fontWeight: "bold" }}>
            We transcend the traditional BPO paradigm <br />
            by fostering collaborations
          </p>
          <p style={{ fontSize: 22 }}>
            We understand that businesses require more than just solutions; they
            need a reliable ally
            <br /> committed to their growth journey. That's precisely who we
            are – a dependable team poised to <br />
            add tangible value to your operations.
          </p>
        </div>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EEEEEE",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "80%",
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
            <img
              src={image2}
              style={{ height: "80%", width: "90%" }}
              alt="dd"
            />
          </div>
          <div
            style={{
              flex: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            <h1 style={{}}>With a proven track record of achievements</h1>
            <p style={{ textAlign: "justify" }}>
              we've successfully built and operated Remote Dispatch Centers for
              four clients in the USA. In the first year of operation, we
              implemented three Remote Dispatch Center solutions, driving
              significant business expansion. Our cost-saving initiatives have
              optimized operational efficiency, resulting in savings of up to
              50% for our clients.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: 300, width: "100%", background: "#008D66" }}>
        <div
          style={{
            height: "15%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center", marginTop: 80, color: "white" }}>
            Some Of Our Key Clients
          </h1>
        </div>
        <div
          style={{
            height: "85%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "90%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 50,
            }}
          >
            <img src={im1} atl="" style={{ height: "30%", width: "7%" }} />
            <img src={im2} atl="" style={{ height: "30%", width: "7%" }} />
            <img src={im3} atl="" style={{ height: "30%", width: "11%" }} />
            <img src={im4} atl="" style={{ height: "30%", width: "7%" }} />
            <img src={im5} atl="" style={{ height: "30%", width: "13%" }} />
            <img src={im6} atl="" style={{ height: "30%", width: "6%" }} />
            <img src={im7} atl="" style={{ height: "30%", width: "6%" }} />
          </div>
        </div>
      </div>
      <div
        style={{
          height: 400,
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
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "15%",
              width: "100%",
              borderBottom: "2px solid gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <h1>Testimonials</h1>
          </div>
          <div
            style={{
              height: "85%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 30,
            }}
          >
            {Testimonials.map((info, i) => {
              return (
                <>
                  <div
                    style={{
                      height: "90%",
                      width: "30%",
                    }}
                  >
                    <div style={{ height: "15%", width: "100%" }}>
                      <img
                        src={Cote}
                        alt="3"
                        style={{
                          height: "90%",
                          marginLeft: -20,
                          marginTop: 20,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        height: "70%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "justify",
                      }}
                    >
                      {info.text}
                    </div>
                    <div
                      style={{
                        height: "15%",
                        width: "100%",
                        fontSize: 20,
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {info.title}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EEEEEE",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "50%",
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
            <img
              src={supervision}
              style={{ height: "70%", width: "80%" }}
              alt="dd"
            />
          </div>
          <div
            style={{
              flex: 5,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              // fontSize: 18,
              lineHeight: 1,
            }}
          >
            <p style={{ fontSize: 32, fontWeight: "bold" }}>
              Ready to elevate your security services to the next level?
            </p>
            <p style={{ fontSize: 32, fontWeight: "bold", marginTop: -10 }}>
              Partner with Serviqore
            </p>
            <p
              style={{
                height: 50,
                width: "40%",
                background: "#008D66",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Get a Quote
            </p>
          </div>
        </div>
      </div>
      {<FaqComp />}
    </>
  );
};

export default Home;
