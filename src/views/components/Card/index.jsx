import styles from "./style.module.css";
export default function Card(props) {
  const today = new Date();

  const dayName = today.toLocaleString("default", { weekday: "long" });
  let time = today.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  let img = "";
  switch (props.description) {
    case "Clouds":
      img = require("../../../Assets/Cloud.png");
      break;
    case "Clear":
      img = require("../../../Assets/sun.png");

      break;
    case "Rain":
      img = require("../../../Assets/rain.jpg");
      break;
    default:
      img = require("../../../Assets/pcloudy.png");

  }

  return (
    <>
      <div className={styles.items}>
        <img src={img} alt="img" className={styles.img} />
        <div
          className="bluer"
          style={{ position: "absolute", top: "17%", right: "13%" }}
        ></div>

        <div className={styles.cardItems}>
          <h2 className={styles.city}>
            {props.city}
            <span>
              {props.temp} &deg;C
            </span>
          </h2>
          <p className={styles.speed}>
            wind speed: <span> {props.speed} Km</span>
          </p>
          <p className={styles.time}>
           <span>{dayName}, {time}</span> 
          </p>
          <p className="">humidity: <span>{props.humidity}</span> </p>
          <p className=" fw-medium ">{props.description}</p>
        </div>
      </div>
    </>
  );
}
