import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const BackToTop = () => {
  const [backTop, setBackTop] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {backTop && (
        <button
          style={{
            position: "fixed",
            height: 40,
            width: 40,
            borderRadius: 5,
            bottom: 50,
            right: 50,
            fontSize: 30,
            color: "white",
            background: "#0766AD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
          }}
          onClick={scrollUp}
        >
          <BsArrowUpSquareFill />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
