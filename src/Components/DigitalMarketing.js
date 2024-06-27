import React from "react";
import digitalMarketing from "../Images/digital_marketing.png";
import TopDiv from "./TopDiv";
import { DigitalMarketingData, MarketingChooseCard } from "../datas";
import AccountingCard from "./AccountingCard";
import Card from "./Card";

const DigitalMarketing = () => {
  return (
    <>
      <TopDiv
        title="Digital Marketing"
        text="We specialize in helping businesses of all sizes reach their online marketing goals. From increasing brand awareness to driving website traffic and generating leads, our comprehensive digital marketing services are designed to help you achieve success in the digital landscape."
        image={digitalMarketing}
      />
      <h1 style={{ textAlign: "center" }}>Our Digital Marketing Services</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {DigitalMarketingData.map((data, index) => (
          <AccountingCard
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
          {MarketingChooseCard.map((data, index) => (
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
    </>
  );
};

export default DigitalMarketing;
