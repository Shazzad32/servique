import React from "react";
import image from "../Images/about_us.png";
import image2 from "../Images/about2.png";
import vector1 from "../Images/Vector (Stroke).png";
import vector2 from "../Images/Vector.png";
import vector3 from "../Images/Vector (1).png";
import { ServiceData, TextData, Teee } from "../datas";
import HomeSubFeature from "./HomeSubFeacher";
import TopDiv from "./TopDiv";
import { FaQuoteLeft } from "react-icons/fa";
import SecurityImg from "../Images/security_02.png";
import AccountingImg from "../Images/Accounting & BookkeepingAccounting & Bookkeeping 1.png";
import VersualImg from "../Images/virtual resourcing 2.png";
import DigitalImg from "../Images/digital_marketing.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Aboutus = () => {
  const ServiceItem = ServiceData[0];
  return (
    <div>
      <TopDiv
        title="Welcome to Serviqore! We're dedicated to excellence, integrity and professional service."
        text="Our mission is to be the reliable ally that empowers businesses with scalable solutions and fosters enduring partnerships for sustained growth and success."
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
        <div
          style={{
            height: "90%",
            width: "70%",
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <p>
            ServiQore envisions itself as the catalyst for robust growth and
            long term success, both for our clients and our company, through our
            innovative approach and steadfast commitment to excellence in the
            BPO industry.
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
              textAlign: "justify",
            }}
          >
            <p style={{}}>
              we go beyond traditional BPO paradigm of service delivery We're
              here to build collaborations We understand that businesses need
              more than solutions they need a reliable ally committed to their
              growth That's who we are a dependable team ready to add real value
              to your operations.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our goal is simple empower businesses, no matter their size, with
              solutions that build long term partnerships, not just
              transactions.
            </p>
          </div>
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
            height: "90%",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gpa: 30,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "65%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {Teee.map((item, i) => {
                return (
                  <div
                    style={{
                      height: "100%",
                      width: "33%",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: 72,
                        color: "green",
                        textAlign: "center",
                        marginTop: -1,
                      }}
                    >
                      {item.amount}
                    </h1>
                    <h2 style={{ marginTop: -40, textAlign: "center" }}>
                      {item.title}
                    </h2>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                height: "35%",
                width: "100%",
                textAlign: "center",
              }}
            >
              <p style={{ textAlign: "center", padding: 30, marginTop: -20 }}>
                We've cultivated collaborative partnerships with 200+ security
                professionals and 50+ job sites, enhancing service customization
                and client satisfaction. Through streamlined operations, we
                maximize effectiveness and productivity, resolving over 100
                incidents every week.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 200,
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 32, fontWeight: "bold" }}>What we do?</p>
          <p>
            Drawing from our collective expertise in Accounting, Virtual
            Resources and Digital Marketing, we craft tailored strategies for
            every client. Whether a startup or a big player, our mission remains
            constant: to boost success with scalable solutions for smooth
            operations and sustainable growth. Our diverse range of services
            includes:
          </p>
        </div>
      </div>

      <div
        style={{
          height: 450,
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          <NavLink
            to="/security"
            style={{
              height: "90%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "black",
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
              <motion.div
                style={{
                  height: "90%",
                  width: "70%",
                  background: "#EEEEEE",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{
                  scale: 1.1,
                  border: "2px solid orange",
                }}
              >
                <img
                  src={SecurityImg}
                  alt="dd"
                  style={{ height: "80%", width: "80%" }}
                />
              </motion.div>
            </div>
            <div style={{ flex: 3 }}>
              <p style={{ fontWeight: "bold", fontSize: 24 }}>
                Security Guard Monitoring &<br /> Dispatch
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/virsual"
            style={{
              height: "90%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "black",
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
              <motion.div
                style={{
                  height: "90%",
                  width: "70%",
                  background: "#EEEEEE",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{
                  scale: 1.1,
                  border: "2px solid orange",
                }}
              >
                <img
                  src={VersualImg}
                  alt="dd"
                  style={{ height: "80%", width: "80%" }}
                />
              </motion.div>
            </div>
            <div style={{ flex: 3 }}>
              <p style={{ fontWeight: "bold", fontSize: 24 }}>
                Virtual Resourcing
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/accounting"
            style={{
              height: "90%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "black",
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
              <motion.div
                style={{
                  height: "90%",
                  width: "70%",
                  background: "#EEEEEE",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{
                  scale: 1.1,
                  border: "2px solid orange",
                }}
              >
                <img
                  src={AccountingImg}
                  alt="dd"
                  style={{ height: "80%", width: "80%" }}
                />
              </motion.div>
            </div>
            <div style={{ flex: 3 }}>
              <p style={{ fontWeight: "bold", fontSize: 24 }}>
                Accounting & Bookkeeping
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/marketing"
            style={{
              height: "90%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "black",
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
              <motion.div
                style={{
                  height: "90%",
                  width: "70%",
                  background: "#EEEEEE",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                whileHover={{
                  scale: 1.1,
                  border: "2px solid orange",
                }}
              >
                <img
                  src={DigitalImg}
                  alt="dd"
                  style={{ height: "80%", width: "80%" }}
                />
              </motion.div>
            </div>
            <div style={{ flex: 3 }}>
              <p style={{ fontWeight: "bold", fontSize: 24 }}>
                Digital Marketing
              </p>
            </div>
          </NavLink>
        </div>
      </div>

      <div
        style={{
          height: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ flex: 1, height: "20%", width: "100%" }}>
          <h1>Why Choose us?</h1>
          <p>
            We work together to take your security business to its fullest
            potential by:
          </p>
        </div>
        <div
          style={{
            flex: 9,
            height: "80%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                height: "90%",
                width: "30%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "45%", width: "100%" }}>
                <img
                  src={vector1}
                  alt="dd"
                  style={{ height: 100, width: 100 }}
                />
              </div>
              <div style={{ height: "55%", width: "100%" }}>
                Response on time to address issues within a 2 minute timeframe.
              </div>
            </div>
            <div
              style={{
                height: "90%",
                width: "30%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "45%", width: "100%" }}>
                <img
                  src={vector2}
                  alt="dd"
                  style={{ height: 100, width: 100 }}
                />
              </div>
              <div style={{ height: "55%", width: "100%" }}>
                Enabling you to concentrate on essential business tasks and
                expansion. We support clients in concentrating on core
                activities while simplifying{" "}
                <b>monitoring, communication, and documentation processes.</b>
              </div>
            </div>
            <div
              style={{
                height: "90%",
                width: "30%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "45%", width: "100%" }}>
                <img
                  src={vector3}
                  alt="dd"
                  style={{ height: 100, width: 100 }}
                />
              </div>
              <div style={{ height: "55%", width: "100%" }}>
                Having tech savvy and seasoned team to oversee guards round the
                clock, ensuring{" "}
                <b>
                  tailored security strategies and compliance with protocols.
                </b>
              </div>
            </div>
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
            width: "80%",
            height: "95%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={vector1}
              alt="vv"
              style={{ height: "80%", widows: "80%" }}
            />
            <h1>Real value for money</h1>
          </div>
          <div
            style={{
              flex: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "75%", height: "100%" }}>
              <li>
                We have a track record of helping clients grow their businesses
                significantly, with growth rates ranging from 300% to 500% in
                the first year.
              </li>
              <li>
                Our services lead to significant savings on monthly staffing
                costs, up to 50%, compared to traditional in house operations
              </li>
              <li>
                Our staffing model is flexible, allowing quick adjustments to
                meet changing demand
              </li>
              <li>
                We consistently work towards streamlining processes , finding
                ways to boost efficiency and cut costs for our clients,
                resulting in long term savings and value creation
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
