import React from "react";

const HomeSlideShow = ({ title, text, image }) => {
  return (
    <div
      style={{
        height: 500,
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        <div style={{ height: "80%", width: "85%" }}>
          <div style={{ height: "80%", width: "100%" }}>
            <p style={{ fontSize: 66, fontWeight: "bolder" }}>{title}</p>
            <p style={{ textAlign: "justify", fontSize: 20, lineHeight: 1.5 }}>
              {text}
            </p>
          </div>
          <div
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              gap: 30,
            }}
          >
            <p
              style={{
                height: 35,
                width: 120,
                background: "#008D66",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                fontSize: 15,
              }}
            >
              Learn More
            </p>
            <p
              style={{
                height: 35,
                width: 120,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#008D66",
                border: "1px solid #008D66",
                fontSize: 15,
              }}
            >
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="slide" style={{ width: "90%", height: "70%" }} />
      </div>
    </div>
  );
};

export default HomeSlideShow;
