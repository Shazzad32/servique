import React from "react";

const CardTwo = ({ icon, title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "12px",
        textAlign: "center",
        width: "25%",
        margin: "10px",
      }}
    >
      <div style={{ fontSize: "40px", color: "green" }}>
        <img src={icon} style={{ height: "20%", width: "20%" }} />
      </div>
      <h3>{title}</h3>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </div>
  );
};

export default CardTwo;
