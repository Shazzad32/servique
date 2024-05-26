import React from "react";

const TopDiv = ({ title, text, image }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "90vh",
          width: "90%",
          display: "flex",
          justifyContent: "flex-end",
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
          <div style={{ height: "60%", width: "80%" }}>
            <p
              style={{
                fontSize: 56,
                fontWeight: "bold",
                color: "#007F73",
                lineHeight: 1,
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: "#535C91",
                fontSize: 18,
                marginTop: -30,
                textAlign: "justify",
              }}
            >
              {text}
            </p>
          </div>
        </div>
        <div
          style={{
            flex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ height: "60%", width: "80%" }}>
            <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDiv;
