// import { React, useState } from "react";
// import TopDiv from "./TopDiv";
// import image from "../Images/Group-713.png";
// import { bool } from "prop-types";

// function Blogs() {
//   const [clickedIndex, setClickedIndex] = useState(null);

//   const handleClick = (index) => {
//     if (clickedIndex === index) {
//       setClickedIndex(null);
//     } else {
//       setClickedIndex(index + 1);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: 450,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             height: 400,
//             width: "80%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             lineHeight: 0.5,
//           }}
//         >
//           <p style={{ fontSize: 40, fontWeight: "bolder" }}>Blogs</p>
//           <p style={{ textAlign: "center", lineHeight: 1.5 }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//             totam eos tempore minima libero veritatis, labore praesentium
//             laboriosam perferendis blanditiis, voluptatem, sequi quasi alias.
//             Aut eius accusamus alias perferendis. Inventore!
//           </p>
//         </div>
//       </div>
//       <p
//         style={{
//           fontWeight: "bolder",
//           fontSize: 30,
//           marginLeft: 100,
//         }}
//       >
//         Recent Blogs Page
//       </p>

//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: "90%",
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-around",
//             alignItems: "center",
//             gap: 20,
//             padding: 10,
//             lineHeight: 1,
//           }}
//         >
//           {[1, 2, 3, 4].map((index) => (
//             <div
//               key={index}
//               style={{
//                 height: clickedIndex === index ? "150%" : "50%",
//                 width: clickedIndex === index ? "100%" : "40%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 position: "relative",
//                 order: clickedIndex === index ? -1 : 0,
//               }}
//               onClick={() => handleClick(index)}
//             >
//               <img
//                 src={image}
//                 style={{ height: "50%", width: "100%" }}
//                 alt="dd"
//               />
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <p style={{ fontWeight: "bolder", fontSize: 18 }}>
//                   Hello World
//                 </p>
//                 <p style={{ fontSize: 22, fontWeight: "bold" }}>
//                   Hello Bangladesh
//                 </p>
//                 <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
//                   modi quam voluptatum necessitatibus nesciunt mollitia facilis.
//                   Animi autem nisi ipsam, alias asperiores aut dicta nemo labore
//                   deleniti quaerat voluptas omnis! Quis consectetur dolore illum
//                   qui, sapiente, similique reprehenderit molestias labore
//                   possimus neque laborum. Laboriosam odio, eveniet repudiandae
//                   non suscipit adipisci!
//                 </p>
//                 <div
//                   style={{
//                     height: 30,
//                     width: "100%",
//                     display: "flex",
//                     gap: 20,
//                     color: "green",
//                   }}
//                 >
//                   {[1, 2, 3, 4, 5].map((tagIndex) => (
//                     <div
//                       key={tagIndex}
//                       style={{
//                         height: "70%",
//                         width: 50,
//                         border: "1px solid green",
//                         borderRadius: 5,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       Tags
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs;

// // import React, { useState } from "react";
// // import TopDiv from "./TopDiv";
// // import image from "../Images/Group-713.png";

// // function Blogs() {
// //   const [clickedIndex, setClickedIndex] = useState(null);

// //   const handleClick = (index) => {
// //     setClickedIndex(clickedIndex === index ? null : index);
// //   };

// //   const blogPosts = [
// //     {
// //       id: 1,
// //       title: "Lorem ipsum dolor sit",
// //       author: "Author Name",
// //       date: "29, Jan 2024",
// //       content:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //       tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
// //     },
// //     {
// //       id: 1,
// //       title: "Lorem ipsum dolor sit",
// //       author: "Author Name",
// //       date: "29, Jan 2024",
// //       content:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //       tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
// //     },
// //     {
// //       id: 1,
// //       title: "Lorem ipsum dolor sit",
// //       author: "Author Name",
// //       date: "29, Jan 2024",
// //       content:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //       tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
// //     },
// //     {
// //       id: 1,
// //       title: "Lorem ipsum dolor sit",
// //       author: "Author Name",
// //       date: "29, Jan 2024",
// //       content:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //       tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
// //     },
// //     // Add more blog post data here
// //   ];

// //   return (
// //     <div>
// //       <div
// //         style={{
// //           height: 450,
// //           width: "100%",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <div
// //           style={{
// //             height: 400,
// //             width: "80%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             flexDirection: "column",
// //             lineHeight: 0.5,
// //           }}
// //         >
// //           <p style={{ fontSize: 40, fontWeight: "bolder" }}>Blogs</p>
// //           <p style={{ textAlign: "center", lineHeight: 1.5 }}>
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
// //             totam eos tempore minima libero veritatis, labore praesentium
// //             laboriosam perferendis blanditiis, voluptatem, sequi quasi alias.
// //             Aut eius accusamus alias perferendis. Inventore!
// //           </p>
// //         </div>
// //       </div>
// //       <p
// //         style={{
// //           fontWeight: "bolder",
// //           fontSize: 30,
// //           marginLeft: 100,
// //         }}
// //       >
// //         Recent Blog Posts
// //       </p>
// //       <div
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           flexDirection: "column",
// //         }}
// //       >
// //         <div
// //           style={{
// //             height: "100%",
// //             width: "90%",
// //             display: "flex",
// //             flexWrap: "wrap",
// //             justifyContent: "space-around",
// //             alignItems: "center",
// //             gap: 20,
// //             padding: 10,
// //             lineHeight: 1,
// //           }}
// //         >
// //           {blogPosts.map((post, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 height: clickedIndex === index ? "auto" : 400,
// //                 width: clickedIndex === index ? "90%" : "40%",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 position: "relative",
// //                 cursor: "pointer",
// //                 transition: "all 0.3s ease",
// //                 border:
// //                   clickedIndex === index ? "2px solid blue" : "1px solid gray",
// //                 padding: clickedIndex === index ? 20 : 10,
// //                 backgroundColor: clickedIndex === index ? "#f0f0f0" : "#fff",
// //               }}
// //               onClick={() => handleClick(index)}
// //             >
// //               <img
// //                 src={image}
// //                 style={{ height: "50%", width: "100%" }}
// //                 alt="blog post"
// //               />
// //               <div
// //                 style={{
// //                   width: "100%",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   padding: clickedIndex === index ? 20 : 10,
// //                 }}
// //               >
// //                 <p style={{ fontWeight: "bolder", fontSize: 18 }}>
// //                   {post.title}
// //                 </p>
// //                 {clickedIndex === index && (
// //                   <>
// //                     <p style={{ fontSize: 14 }}>
// //                       {post.author} - {post.date}
// //                     </p>
// //                     <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
// //                       {post.content}
// //                     </p>
// //                   </>
// //                 )}
// //                 <div
// //                   style={{
// //                     height: 30,
// //                     width: "100%",
// //                     display: "flex",
// //                     gap: 20,
// //                     color: "green",
// //                     flexWrap: "wrap",
// //                     justifyContent:
// //                       clickedIndex === index ? "flex-start" : "center",
// //                   }}
// //                 >
// //                   {post.tags.map((tag, tagIndex) => (
// //                     <div
// //                       key={tagIndex}
// //                       style={{
// //                         height: "70%",
// //                         width: 50,
// //                         border: "1px solid green",
// //                         borderRadius: 5,
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         margin: clickedIndex === index ? 5 : 0,
// //                       }}
// //                     >
// //                       {tag}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Blogs;

import React, { useState } from "react";
import { blogPosts } from "../datas"; // Importing data from data.js

function Blogs() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div>
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
            height: 400,
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            lineHeight: 0.5,
          }}
        >
          <p style={{ fontSize: 40, fontWeight: "bolder" }}>Blogs</p>
          <p style={{ textAlign: "center", lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            totam eos tempore minima libero veritatis, labore praesentium
            laboriosam perferendis blanditiis, voluptatem, sequi quasi alias.
            Aut eius accusamus alias perferendis. Inventore!
          </p>
        </div>
      </div>
      <p
        style={{
          fontWeight: "bolder",
          fontSize: 30,
          marginLeft: 100,
        }}
      >
        Recent Blog Posts
      </p>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 20,
            padding: 10,
            lineHeight: 1,
          }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              style={{
                height: clickedIndex === index ? "auto" : "500px",
                width: clickedIndex === index ? "90%" : "44%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: "red",
                // border:
                //   clickedIndex === index ? "2px solid blue" : "1px solid gray",
                padding: 20,
                backgroundColor: clickedIndex === index ? "#f0f0f0" : "#f0f0f0",
                order: clickedIndex === index ? -1 : 0,
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={post.image}
                style={{ height: "50%", width: "50%" }}
                alt={post.title}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: 10,
                }}
              >
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                  {post.title}
                </p>
                <p style={{ textAlign: "justify" }}>{post.desc}</p>
                {clickedIndex === index && (
                  <>
                    <p style={{ fontSize: 14 }}>
                      {post.author} - {post.date}
                    </p>
                    <p
                      style={{
                        textAlign: "justify",
                        lineHeight: 1.2,
                      }}
                    >
                      {post.content}
                    </p>
                  </>
                )}
                <div
                  style={{
                    height: 30,
                    width: "100%",
                    display: "flex",
                    gap: 20,
                    color: "green",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    // clickedIndex === index ? "flex-start" : "flex-start",
                  }}
                >
                  {post.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      style={{
                        height: "70%",
                        width: 50,
                        border: "1px solid green",
                        borderRadius: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 5,
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* {clickedIndex !== null && (
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              {blogPosts.map(
                (post, index) =>
                  clickedIndex !== index && (
                    <div
                      key={index}
                      style={{
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClick(index)}
                    >
                      <img
                        src={post.image}
                        style={{ height: "50%", width: "100%" }}
                        alt={post.title}
                      />
                      <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                        {post.title}
                      </p>
                    </div>
                  )
              )}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { blogPosts } from "../datas";

// function Blogs() {
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const history = useHistory();

//   const handleClick = (index) => {
//     setClickedIndex(clickedIndex === index ? null : index);
//     history.push(`/blog/${blogPosts[index].id}`);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: 450,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             height: 400,
//             width: "80%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             lineHeight: 0.5,
//           }}
//         >
//           <p style={{ fontSize: 40, fontWeight: "bolder" }}>Blogs</p>
//           <p style={{ textAlign: "center", lineHeight: 1.5 }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//             totam eos tempore minima libero veritatis, labore praesentium
//             laboriosam perferendis blanditiis, voluptatem, sequi quasi alias.
//             Aut eius accusamus alias perferendis. Inventore!
//           </p>
//         </div>
//       </div>
//       <p
//         style={{
//           fontWeight: "bolder",
//           fontSize: 30,
//           marginLeft: 100,
//         }}
//       >
//         Recent Blog Posts
//       </p>
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: "90%",
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-around",
//             alignItems: "center",
//             gap: 20,
//             padding: 10,
//             lineHeight: 1,
//           }}
//         >
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               style={{
//                 height: clickedIndex === index ? "auto" : "500px",
//                 width: clickedIndex === index ? "90%" : "45%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//                 position: "relative",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 padding: 10,
//                 backgroundColor: "#f0f0f0",
//                 order: clickedIndex === index ? -1 : 0,
//               }}
//               onClick={() => handleClick(index)}
//             >
//               <img
//                 src={post.image}
//                 style={{ height: "55%", width: "80%" }}
//                 alt={post.title}
//               />
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   padding: 10,
//                 }}
//               >
//                 <p style={{ fontWeight: "bolder", fontSize: 18 }}>
//                   {post.author}
//                 </p>
//                 <p style={{ fontWeight: "bold", fontSize: 22 }}>{post.title}</p>
//                 <p>{post.desc}</p>
//                 <div
//                   style={{
//                     height: 30,
//                     width: "100%",
//                     display: "flex",
//                     gap: 20,
//                     color: "green",
//                     flexWrap: "wrap",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {post.tags.map((tag, tagIndex) => (
//                     <div
//                       key={tagIndex}
//                       style={{
//                         height: "70%",
//                         width: 50,
//                         border: "1px solid green",
//                         borderRadius: 5,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         margin: 5,
//                       }}
//                     >
//                       {tag}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//           {clickedIndex !== null && (
//             <div
//               style={{
//                 width: "90%",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginTop: 20,
//               }}
//             >
//               {blogPosts.map(
//                 (post, index) =>
//                   clickedIndex !== index && (
//                     <div
//                       key={index}
//                       style={{
//                         width: "30%",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         cursor: "pointer",
//                       }}
//                       onClick={() => handleClick(index)}
//                     >
//                       <img
//                         src={post.image}
//                         style={{ height: "50%", width: "100%" }}
//                         alt={post.title}
//                       />
//                       <p style={{ fontWeight: "bolder", fontSize: 18 }}>
//                         {post.title}
//                       </p>
//                     </div>
//                   )
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs;
