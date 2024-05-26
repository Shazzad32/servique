// import React from "react";
// import image from "../Images/Group-713.png";
// import { ServiceData, TextData } from "../datas";
// import HomeSubFeature from "./HomeSubFeacher";
// import TopDiv from "./TopDiv";

// const Aboutus = () => {
//   const ServiceItem = ServiceData[0];
//   return (
//     <div>
//       <TopDiv
//         title="About"
//         text="This is about section to write details about"
//         image={image}
//       />
//       <div
//         style={{
//           height: 300,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ width: "50%", textAlign: "center" }}>
//           {TextData.map((item, i) => {
//             return (
//               <>
//                 <p style={{ fontSize: 35, fontWeight: "bolder" }}>
//                   A Customized Plan of action
//                 </p>
//                 <p style={{ fontSize: 20 }}>{item.text}</p>
//               </>
//             );
//           })}
//         </div>
//       </div>
//       <div
//         style={{
//           height: 400,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "#EEEEEE",
//         }}
//       >
//         <div
//           style={{
//             height: "90%",
//             width: "80%",
//             display: "flex",
//           }}
//         >
//           <div
//             style={{
//               flex: 5,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img src={image} style={{ height: "80%", width: "90%" }} alt="dd" />
//           </div>
//           <div style={{ flex: 5 }}>
//             <p style={{ fontSize: 42, fontWeight: "bold", lineHeight: 1 }}>
//               {" "}
//               With a proven track record of achievments.
//             </p>
//             <p style={{ textAlign: "justify" }}>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Assumenda voluptatem repellat, consequuntur id aliquid aliquam
//               tenetur accusantium, harum unde quis in, non fugiat veritatis
//               possimus. Molestiae, odio ullam alias nobis consequuntur eius
//               officia quam quo voluptatibus dolorum sit perspiciatis aliquam.
//               Optio laborum autem exercitationem repellat ab. In cupiditate
//               fugit sit id quae ratione fugiat quisquam vitae necessitatibus
//             </p>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           height: 350,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             height: "90%",
//             width: "80%",
//             background: "white",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <div
//             style={{
//               height: "70%",
//               width: "100%",
//               display: "flex",
//             }}
//           >
//             <div
//               style={{
//                 flex: 3.3,
//                 flexDirection: "column",
//                 lineHeight: 0.1,
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: 72,
//                   fontWeight: "bolder",
//                   textAlign: "center",
//                   color: "#007F73",
//                 }}
//               >
//                 200+
//               </p>
//               <p
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 Lorem ipsum dolor Lorem ipsum dolor
//               </p>
//             </div>
//             <div
//               style={{
//                 flex: 3.3,
//                 flexDirection: "column",
//                 lineHeight: 0.1,
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: 72,
//                   fontWeight: "bolder",
//                   textAlign: "center",
//                   color: "#007F73",
//                 }}
//               >
//                 50+
//               </p>
//               <p
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 Jon Sites
//               </p>
//             </div>
//             <div
//               style={{
//                 flex: 3.3,
//                 flexDirection: "column",
//                 lineHeight: 0.1,
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: 72,
//                   fontWeight: "bolder",
//                   textAlign: "center",
//                   color: "#007F73",
//                 }}
//               >
//                 100+
//               </p>
//               <p
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 Lorem ipsum dolor Lorem ipsum dolor
//               </p>
//             </div>
//           </div>
//           <div
//             style={{
//               height: "30%",
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               fontSize: 18,
//             }}
//           >
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Dignissimos deserunt obcaecati enim maxime aliquid atque tempore
//             repellat voluptatem, eum temporibus rem dolorum reiciendis deleniti
//             consectetur minus unde quis, odio magnam doloribus recusandae
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           height: 800,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ height: "90%", width: "85%" }}>
//           {ServiceData.map((item, index) => {
//             return (
//               <>
//                 <div
//                   id={index}
//                   style={{
//                     height: 400,
//                     width: "100%",
//                     display: "flex",
//                     flexDirection: index % 2 === 0 ? "row-reverse" : "row",
//                   }}
//                 >
//                   <div
//                     style={{
//                       flex: 5,
//                       width: "80%",
//                       display: "flex",
//                       // alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <img
//                       src={index === 1 ? "" : item.image}
//                       style={{ height: "70%", width: "60%" }}
//                       alt=""
//                     />
//                   </div>
//                   <div
//                     style={{
//                       flex: 5,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       background: "red",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "70%",
//                         height: "80%",
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <h2>{item.title}</h2>
//                       <p
//                         style={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           // textAlign: "justify",
//                           // fontFamily: "cursive",
//                           // fontWeight: "bold",
//                         }}
//                       >
//                         {item.descrip}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;

import React from "react";
import image from "../Images/Group-713.png";
import { ServiceData, TextData, Teee } from "../datas";
import HomeSubFeature from "./HomeSubFeacher";
import TopDiv from "./TopDiv";
import { FaQuoteLeft } from "react-icons/fa";

const Aboutus = () => {
  const ServiceItem = ServiceData[0];
  return (
    <div>
      <TopDiv
        title="Your startegic seccess partner in scalability and seamless operations"
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda voluptatem repellat, consequuntur id aliquid aliquam
        tenetur accusantium, harum unde quis in, non fugiat veritatis
        possimus. Molestiae,"
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
        <div style={{ width: "50%", textAlign: "center" }}>
          {TextData.map((item, i) => {
            return (
              <>
                <p style={{ fontSize: 35, fontWeight: "bolder" }}>
                  A Customized Plan of action
                </p>
                <p style={{ fontSize: 20 }}>{item.text}</p>
              </>
            );
          })}
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
            <img src={image} style={{ height: "80%", width: "90%" }} alt="dd" />
          </div>
          <div style={{ flex: 5 }}>
            <p style={{ fontSize: 42, fontWeight: "bold", lineHeight: 1 }}>
              {" "}
              With a proven track record of achievments.
            </p>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda voluptatem repellat, consequuntur id aliquid aliquam
              tenetur accusantium, harum unde quis in, non fugiat veritatis
              possimus. Molestiae, odio ullam alias nobis consequuntur eius
              officia quam quo voluptatibus dolorum sit perspiciatis aliquam.
              Optio laborum autem exercitationem repellat ab. In cupiditate
              fugit sit id quae ratione fugiat quisquam vitae necessitatibus
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia quas assumenda dolorem explicabo praesentium magnam
                error earum perferendis nam, illo cumque, ab, libero in
                asperiores? Ullam, eaque non est veritatis incidunt molestiae,
                porro eligendi impedit itaque laboriosam dignissimos
                perspiciatis. Error excepturi quisquam sed consequuntur pariatur
                rerum beatae ex deserunt cumque!
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      {ServiceData.map((item, i) => {
        return (
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
                height: "95%",
                width: "70%",
                display: "flex",
                flexDirection: i % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "95%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.image}
                  style={{ height: "90%", width: "90%" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: "50%",
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <h1>{item.title}</h1>
                <p>{item.descrip}</p>
              </div>
            </div>
          </div>
        );
      })}
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
            width: "85%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "20%",
              width: "100%",
              borderBottom: "1px solid black",
              display: "flex",
              alignItems: "center",
              fontSize: 42,
              fontWeight: "bold",
            }}
          >
            Testimonial
          </div>
          <div
            style={{
              height: "80%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {Teee.map((info, i) => {
              return (
                <div style={{ height: "90%", width: "30%" }}>
                  <FaQuoteLeft
                    style={{ color: "#D9EDBF", height: 50, width: 50 }}
                  />
                  <p
                    style={{
                      height: "60%",
                      width: "100%",
                      fontSize: 18,
                      textAlign: "justify",
                    }}
                  >
                    {info.descrip}
                  </p>
                  <h3 style={{ height: "30%", width: "100%" }}>{info.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
