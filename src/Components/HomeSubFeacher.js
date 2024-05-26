// import img from "../Images/Group-713.png";
import { FeacherData, ServiceData } from "../datas";

const HomeSubFeacher = ({ image, title, description, butto }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {ServiceData.map((item, index) => {
        return (
          <>
            <div
              id={index}
              style={{
                height: 400,
                width: "100%",
                display: "flex",
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <div
                style={{
                  flex: 5,
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={index === 1 ? "" : image}
                  style={{ height: "70%", width: "60%" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  flex: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2>{title}</h2>
                  <p
                    style={{
                      textAlign: "justify",
                      fontFamily: "cursive",
                      fontWeight: "bold",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomeSubFeacher;
