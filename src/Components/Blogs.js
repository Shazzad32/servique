import { React, useState } from "react";
import TopDiv from "./TopDiv";
import image from "../Images/Group-713.png";
import { bool } from "prop-types";

function Blogs() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
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
        Recent Blogs Page
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
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              style={{
                height: clickedIndex === index ? "150%" : "50%",
                width: clickedIndex === index ? "100%" : "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                order: clickedIndex === index ? -1 : 0,
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={image}
                style={{ height: "50%", width: "100%" }}
                alt="dd"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontWeight: "bolder", fontSize: 18 }}>
                  Hello World
                </p>
                <p style={{ fontSize: 22, fontWeight: "bold" }}>
                  Hello Bangladesh
                </p>
                <p style={{ textAlign: "justify", lineHeight: 1.2 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  modi quam voluptatum necessitatibus nesciunt mollitia facilis.
                  Animi autem nisi ipsam, alias asperiores aut dicta nemo labore
                  deleniti quaerat voluptas omnis! Quis consectetur dolore illum
                  qui, sapiente, similique reprehenderit molestias labore
                  possimus neque laborum. Laboriosam odio, eveniet repudiandae
                  non suscipit adipisci!
                </p>
                <div
                  style={{
                    height: 30,
                    width: "100%",
                    display: "flex",
                    gap: 20,
                    color: "green",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((tagIndex) => (
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
                      }}
                    >
                      Tags
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
