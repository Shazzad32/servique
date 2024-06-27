import React from "react";
import TopDiv from "./TopDiv";
import Accounting from "../Images/Accounting & BookkeepingAccounting & Bookkeeping 1.png";
import AccountCard from "./AccountingCard";
import { AccountingCard, AccountingChooseCard } from "../datas";
import Card from "./Card";

const AccountingBookkeeping = () => {
  return (
    <div>
      <TopDiv
        title="Accounting & Taxation Service"
        text="At Serviqore, we pride ourselves on delivering comprehensive Accounting and Taxation services tailored to meet the diverse needs of individual service provider and businesses across the UK, Finland, and Australia. With a proven track record of excellence, we've become the trusted partner for over 115 clients seeking reliable financial management solutions."
        image={Accounting}
      />
      <h1 style={{ textAlign: "center" }}>
        Our Accounting & Bookkeeping Services
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
        {AccountingCard.map((data, index) => (
          <AccountCard
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
          {AccountingChooseCard.map((data, index) => (
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

export default AccountingBookkeeping;
