// // import React from "react";
// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { blogPosts } from "./data";

// function BlogDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const post = blogPosts.find((post) => post.id === parseInt(id));

//   const handleClick = (index) => {
//     navigate(`/blog/${blogPosts[index].id}`);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{post.title}</h1>
//       <img
//         src={post.image}
//         alt={post.title}
//         style={{ width: "100%", height: "auto" }}
//       />
//       <p>
//         <strong>Author:</strong> {post.author}
//       </p>
//       <p>
//         <strong>Date:</strong> {post.date}
//       </p>
//       <p style={{ textAlign: "justify", lineHeight: 1.5 }}>{post.content}</p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {post.tags.map((tag, index) => (
//           <div
//             key={index}
//             style={{
//               padding: "5px 10px",
//               border: "1px solid green",
//               borderRadius: "5px",
//               backgroundColor: "#f0f0f0",
//             }}
//           >
//             {tag}
//           </div>
//         ))}
//       </div>
//       <h3 style={{ marginTop: "40px" }}>Other Posts</h3>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {blogPosts
//           .filter((p) => p.id !== post.id)
//           .map((otherPost, index) => (
//             <div
//               key={index}
//               style={{
//                 width: "30%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleClick(index)}
//             >
//               <img
//                 src={otherPost.image}
//                 style={{ height: "50%", width: "100%" }}
//                 alt={otherPost.title}
//               />
//               <p style={{ fontWeight: "bolder", fontSize: 18 }}>
//                 {otherPost.title}
//               </p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default BlogDetail;
