import { React, useState } from "react";
import { FeacherData } from "../datas";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Card } from "@mui/material";

const FaqComp = () => {
  const [expandedStates, setExpandedStates] = useState(
    Array(FeacherData.length).fill(false)
  );

  const toggleExpansion = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };
  return (
    <div
      style={{
        height: 620,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#008D66" }}>FAQ's</h1>
      {FeacherData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              height: expandedStates[index] ? 150 : 100, // Adjust height based on expanded state
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              className="expandable-card"
              style={{
                height: expandedStates[index] ? 120 : 80, // Adjust height based on expanded state
                width: "70%",
                background: "#F5F5F5",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: expandedStates[index] ? 20 : 18,
                textAlign: "justify",
              }}
            >
              {expandedStates[index] ? (
                <div
                  style={{ height: "100%", width: "100%" }}
                  className="header"
                  onClick={() => toggleExpansion(index)}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RemoveOutlinedIcon
                        style={{
                          height: "50%",
                          width: "50%",
                          color: "green",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        height: "100%",
                        width: "90%",
                      }}
                    >
                      {" "}
                      <p style={{ padding: 10 }}>{item.descrip}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{ height: "100%", width: "100%" }}
                  className="header"
                  onClick={() => toggleExpansion(index)}
                >
                  {/* Title content */}
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "left",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AddOutlinedIcon
                        style={{
                          height: "50%",
                          width: "50%",
                          color: "green",
                        }}
                      />
                    </div>
                    <div style={{ height: "100%", width: "90%" }}>
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FaqComp;
