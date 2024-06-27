import React from "react";
import TopDiv from "../Components/TopDiv";
import Virsual from "../Images/virtual resourcing 2.png";
import { cardData, cardTwoData } from "../datas";
import Card from "../Components/Card";
import CardTwo from "./CardTow";

const VirtualResourcing = () => {
  return (
    <div>
      <TopDiv
        title="Virtual Resourcing"
        text="At serviQore, we understand the challenges of finding the right talent to drive your business forward. That's why we've created our Virtual Resourcing Service, a comprehensive solution designed to meet all your staffing needs efficiently and effectively. Whether you're seeking temporary support or long-term hires, we're here to help you build the team you need to succeed."
        image={Virsual}
      />
      <h1 style={{ textAlign: "center" }}>
        Welcome to Our Virtual Resourcing Service
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {cardTwoData.map((data, index) => (
          <CardTwo
            key={index}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Why Choice Us ?</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          {cardData.map((data, index) => (
            <Card
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Get Started Today</h1>
      <div
        style={{
          height: 150,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "100%", width: "60%" }}>
          <p style={{ textAlign: "center", fontSize: 18 }}>
            Ready to take your recruitment efforts to the next level? Contact us
            today to learn more about our Virtual Resourcing Service and
            discover how we can help you build a winning team for your
            organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualResourcing;
