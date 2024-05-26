import React from "react";
import image from "../Images/Group-713.png";
import { ServiceData, TextData } from "../datas";
import HomeSubFeature from "./HomeSubFeacher";
import { Card } from "@mui/material";
import TopDiv from "./TopDiv";

const Services = () => {
  const ServiceItem = ServiceData[0];
  return (
    <div>
      <TopDiv
        title="Services"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, assumenda recusandae accusantium vitae voluptatum
                consequatuLorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, assumenda recusandae accusantium vitae voluptatum
                consequatu.assumenda recusandae accusantium vitae voluptatum
                consequatu"
        image={image}
      />
      <div
        style={{
          height: 700,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "80%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "70%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Card
              style={{
                height: "90%",
                width: "30%",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                style={{ height: "90%", width: "90%" }}
                alt="44"
              />
            </Card>
            <Card
              style={{
                height: "90%",
                width: "30%",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                style={{ height: "90%", width: "90%" }}
                alt="44"
              />
            </Card>
            <Card
              style={{
                height: "90%",
                width: "30%",
                background: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                style={{ height: "90%", width: "90%" }}
                alt="44"
              />
            </Card>
          </div>
          <div
            style={{
              height: "30%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                height: "90%",
                width: "30%",
                background: "white",
                lineHeight: 0.5,
              }}
            >
              <p
                style={{
                  fontSize: 38,
                  fontWeight: "bold",
                }}
              >
                Versual Resourching
              </p>
              <p style={{ textAlign: "justify", lineHeight: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, assumenda recusandae accusantium vitae voluptatum
                consequatu
              </p>
            </div>
            <div
              style={{
                height: "90%",
                width: "30%",
                background: "white",
                lineHeight: 0.5,
              }}
            >
              <p
                style={{
                  fontSize: 38,
                  fontWeight: "bold",
                }}
              >
                Versual Resourching
              </p>
              <p style={{ textAlign: "justify", lineHeight: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, assumenda recusandae accusantium vitae voluptatum
                consequatu
              </p>
            </div>
            <div
              style={{
                height: "90%",
                width: "30%",
                background: "white",
                lineHeight: 0.5,
              }}
            >
              <p
                style={{
                  fontSize: 38,
                  fontWeight: "bold",
                }}
              >
                Versual Resourching
              </p>
              <p style={{ textAlign: "justify", lineHeight: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, assumenda recusandae accusantium vitae voluptatum
                consequatu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
