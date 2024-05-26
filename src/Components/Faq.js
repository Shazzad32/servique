import React, { useState } from "react";
import TopDiv from "./TopDiv";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import image from "../Images/Group-713.png";
import { FeacherData } from "../datas";
import { Card, InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

// const Faq = () => {
//   const [expandedStates, setExpandedStates] = useState(
//     Array(FeacherData.length).fill(false)
//   );

//   const toggleExpansion = (index) => {
//     const newExpandedStates = [...expandedStates];
//     newExpandedStates[index] = !newExpandedStates[index];
//     setExpandedStates(newExpandedStates);
//   };

//   return (
//     <>
//       <div
//         style={{
//           height: 500,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <p style={{ fontWeight: "bolder", color: "#186F65", fontSize: 72 }}>
//           Frequently Asked question
//         </p>
//         <TextField
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <FiSearch />
//               </InputAdornment>
//             ),
//           }}
//           label="What can we help you find ?"
//           style={{ width: "40%", height: 150 }}
//         />
//       </div>
//       {FeacherData.map((item, index) => {
//         return (
//           <div
//             key={index}
//             style={{
//               height: 120,
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Card
//               className="expandable-card"
//               style={{
//                 height: 80,
//                 width: "70%",
//                 background: "#F5F5F5",
//                 cursor: "pointer",
//               }}
//             >
//               {expandedStates[index] ? (
//                 <div
//                   style={{ height: "100%", width: "100%" }}
//                   className="header"
//                   onClick={() => toggleExpansion(index)}
//                 >
//                   <div
//                     style={{ display: "flex", width: "100%", height: "100%" }}
//                   >
//                     <div
//                       style={{
//                         width: "10%",

//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontWeight: "bolder",
//                       }}
//                     >
//                       <RemoveOutlinedIcon
//                         style={{
//                           color: "green",
//                           fontWeight: "bolder",
//                           height: "50%",
//                           width: "50%",
//                         }}
//                       />
//                     </div>
//                     <div
//                       style={{
//                         width: "90%",

//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "black",
//                       }}
//                     >
//                       <p>{item.descrip}</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   style={{ height: "100%", width: "100%" }}
//                   className="header"
//                   onClick={() => toggleExpansion(index)}
//                 >
//                   <div
//                     style={{ display: "flex", width: "100%", height: "100%" }}
//                   >
//                     <div
//                       style={{
//                         width: "10%",
//                         height: "100%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontWeight: "bolder",
//                       }}
//                     >
//                       <AddOutlinedIcon
//                         style={{
//                           color: "green",
//                           fontWeight: "bolder",
//                           height: "50%",
//                           width: "50%",
//                         }}
//                       />
//                     </div>
//                     <div
//                       style={{
//                         width: "90%",
//                         height: "100%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "left",
//                         color: "black",
//                       }}
//                     >
//                       <h2>{item.title}</h2>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Card>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Faq;

const Faq = () => {
  const [expandedStates, setExpandedStates] = useState(
    Array(FeacherData.length).fill(false)
  );

  const toggleExpansion = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <>
      <div
        style={{
          height: 500,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontWeight: "bolder", color: "#186F65", fontSize: 72 }}>
          Frequently Asked question
        </p>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
          }}
          label="What can we help you find ?"
          style={{ width: "40%", height: 150 }}
        />
      </div>
      {FeacherData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              height: expandedStates[index] ? 200 : 120, // Adjust height based on expanded state
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
                height: expandedStates[index] ? 150 : 80, // Adjust height based on expanded state
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
                  {/* Description content */}
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
                      <p style={{ padding: 20 }}>{item.descrip}</p>
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
    </>
  );
};

export default Faq;
