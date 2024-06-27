import React from "react";
import TopDiv from "./TopDiv";
import Image from "../Images/security.png";
import { Square } from "../Components/Career";
import { securityData } from "../datas";
import "../Components/style.css";

const SecurityDispatch = () => {
  return (
    <>
      <TopDiv
        title="Security Guard Monitoring Service"
        text="We're dedicated to excellence, integrity and professional service. Our mission is to empower businesses of all sizes with collaborative solutions for long term success. Beyond traditional BPO, we're your reliable ally committed to growth. With over 3 years of experience and expertise in Remote Security Monitoring and Dispatch we tailor strategies for smooth operations and sustainable growth.We provide Centralised Monitoring & Dispatch Centre services to multiple security guard businesses in the USA. Our service ensure streamline communication and coordination."
        image={Image}
      />
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
          <div style={{ flex: 2, textAlign: "center" }}>
            <h1>What you will get</h1>
          </div>
          <div
            style={{
              flex: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 10,
            }}
          >
            <div
              style={{
                width: "20%",
                height: "95%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Image}
                  style={{
                    height: "75%",
                    width: "75%",
                    borderRadius: "75%",
                    background: "#EEEEEE",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Contact Centre for your
                  <br /> guards and clients
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "95%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Image}
                  style={{
                    height: "75%",
                    width: "75%",
                    borderRadius: "75%",
                    background: "#EEEEEE",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Response within 2 minutes:
                  <br /> incident response, resolution
                  <br /> and documentation, as well
                  <br /> as clients’ requests
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "95%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Image}
                  style={{
                    height: "75%",
                    width: "75%",
                    borderRadius: "75%",
                    background: "#EEEEEE",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Real-time GPS and
                  <br /> Reports monitoring
                </p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "95%",
                background: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Image}
                  style={{
                    height: "75%",
                    width: "75%",
                    borderRadius: "75%",
                    background: "#EEEEEE",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>Fatigue management</p>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "95%",
                background: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Image}
                  style={{
                    height: "75%",
                    width: "75%",
                    borderRadius: "75%",
                    background: "#EEEEEE",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Customisable according
                  <br /> to your business needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {securityData.map((item, i) => {
        return (
          <div
            style={{
              height: 340,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "97%",
                width: "90%",
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
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
                <img src={item.image} style={{ width: "75%", height: "85%" }} />
              </div>
              <div
                style={{
                  flex: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "90%", height: "90%" }}>
                  <div style={{ height: "40%", width: "100%" }}>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                  </div>
                  <div
                    style={{
                      height: "60%",
                      width: "100%",
                      display: "flex",
                      marginBottom: 0,
                      flexDirection: "column",
                      marginLeft: 20,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.list1 && <li>{item.list1}</li>}
                    {item.list2 && <li>{item.list2}</li>}
                    {item.list3 && <li>{item.list3}</li>}
                    {item.list4 && <li>{item.list4}</li>}
                    {item.list5 && <li>{item.list5}</li>}
                    {item.list6 && <li>{item.list6}</li>}
                    {item.list7 && <li>{item.list7}</li>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SecurityDispatch;
