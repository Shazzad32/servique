import React from "react";
import image from "../Images/Group-713.png";
import { Card } from "@mui/material";
import FormComponent from "./FormComponent";
import { WhyWorkData } from "../datas";
import Carddd from "../Components/Card";

const Career = () => {
  return (
    <>
      <div>
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
              height: 400,
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              lineHeight: 0.5,
            }}
          >
            <p style={{ fontSize: 40, fontWeight: "bolder" }}>Carrers</p>
            <p style={{ textAlign: "center", lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis totam eos tempore minima libero veritatis, labore
              praesentium laboriosam perferendis blanditiis, voluptatem, sequi
              quasi alias. Aut eius accusamus alias perferendis. Inventore!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Why Works With Us</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          {WhyWorkData.map((data, index) => (
            <Carddd
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          height: 300,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "70%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: -1,
            }}
          >
            Current Openings
          </h1>

          <div
            style={{
              flex: 9,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <Card
              style={{
                height: "85%",
                width: "22%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 4, lineHeight: 0.2, marginLeft: 10 }}>
                <h3>Marketing Manager</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div
                style={{
                  flex: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginLeft: 10 }}>view & apply</p>
                <div
                  style={{
                    height: 23,
                    width: 60,
                    borderRadius: 3,
                    background: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0D9276",
                    color: "white",
                    marginRight: 20,
                  }}
                >
                  <p style={{ fontSize: 14 }}>remote</p>
                </div>
              </div>
            </Card>
            <Card
              style={{
                height: "85%",
                width: "22%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 4, lineHeight: 0.2, marginLeft: 10 }}>
                <h3>Marketing Manager</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div
                style={{
                  flex: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginLeft: 10 }}>view & apply</p>
                <div
                  style={{
                    height: 23,
                    width: 60,
                    borderRadius: 3,
                    background: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0D9276",
                    color: "white",
                    marginRight: 20,
                  }}
                >
                  <p style={{ fontSize: 14 }}>remote</p>
                </div>
              </div>
            </Card>
            <Card
              style={{
                height: "85%",
                width: "22%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 4, lineHeight: 0.2, marginLeft: 10 }}>
                <h3>Marketing Manager</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div
                style={{
                  flex: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginLeft: 10 }}>view & apply</p>
                <div
                  style={{
                    height: 23,
                    width: 60,
                    borderRadius: 3,
                    background: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0D9276",
                    color: "white",
                    marginRight: 20,
                  }}
                >
                  <p style={{ fontSize: 14 }}>remote</p>
                </div>
              </div>
            </Card>
            <Card
              style={{
                height: "85%",
                width: "22%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 4, lineHeight: 0.2, marginLeft: 10 }}>
                <h3>Marketing Manager</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div
                style={{
                  flex: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginLeft: 10 }}>view & apply</p>
                <div
                  style={{
                    height: 23,
                    width: 60,
                    borderRadius: 3,
                    background: "gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0D9276",
                    color: "white",
                    marginRight: 20,
                  }}
                >
                  <p style={{ fontSize: 14 }}>remote</p>
                </div>
              </div>
            </Card>
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
        <div
          style={{
            height: "95%",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            lineHeight: 0.5,
          }}
        >
          <p style={{ fontSize: 40, fontWeight: "bolder" }}>How To Apply</p>
          <p style={{ textAlign: "center", lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            totam eos tempore minima libero veritatis, labore praesentium
            laboriosam perferendis blanditiis, voluptatem, sequi quasi alias.
            Aut eius accusamus alias perferendis. Inventore!
          </p>
        </div>
      </div>
      <div
        style={{
          height: 350,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "95%",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexDirection: "row",
            gap: "2%",
          }}
        >
          <div
            style={{
              width: "48%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img src={image} alt="dd" style={{ height: "90%", width: "90%" }} />
            <Card
              style={{
                height: 70,
                width: 400,
                position: "absolute",
                marginTop: 200,
                fontSize: 40,
                borderRadius: 30,
                textAlign: "center",
                fontWeight: "bolder",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Job
            </Card>
          </div>
          <div
            style={{
              width: "48%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "90%", height: "90%", background: "white" }}>
              <div
                style={{
                  height: "30%",
                  width: "100%",
                  fontSize: 35,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Don't See A Position That Match Your Position
              </div>
              <div style={{ height: "55%", width: "100%", marginLeft: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                aliquid ullam quidem soluta vitae dolore tempore harum.
                Aspernatur, molestiae nam. Quam, exercitationem. Necessitatibus
                quas facere, laboriosam eos impedit incidunt repellendus sunt
                quidem, architecto officia delectus fugit, iste suscipit
                similique ducimus magnam? Atque nemo esse repellat velit aliquam
                magnam nulla iure?
              </div>
              <div style={{ height: "15%", width: "100%", marginLeft: 10 }}>
                <input
                  placeholder="uplode your resume"
                  style={{
                    height: "60%",
                    width: "60%",
                    padding: 6,
                    borderRadius: 5,
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
