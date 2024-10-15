import { useEffect, useState } from "react";
import { fetchWeatherData } from "../../controllers/CityWeatherController";
import Card from "../components/Card";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [city, setCity] = useState("cairo");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        setCity(input);
      }
    }
  };

  const handelSearchInput = (e) => {
    if (e.target.value.trim() !== "") {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setCity(input);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchWeather();
  }, [city]);

  if (isLoading) {
    return <p style={{ color: "#fff" }}>Loading...</p>;
  }

  return (
    <main>
      <h1 className="text-white mt-4 mb-3 ms-4 ">Dark Weather</h1>
      <div className={` container text-center  `}>
        <div className="row justify-content-center">
          <p className={`${styles.textTop}`}>
            Seeing the weather of the whole world with
            <br /> <span className={styles.darkSpan}> Dark Weather!</span>
          </p>
         
          <div className="col-md-9  justify-content-center ">
            <div className={` d-flex justify-content-center align-items-center  `}>
              <form  onSubmit={handleSubmit} style={{width:"100%"}}>
                <div className={`input-group mx-auto  `}  >
                  <input
                    type="search"
                    className={`${styles.searchInput} `}
                    placeholder="search here"
                    name="search"
                    aria-label="search here"
                    aria-describedby="search"
                    onChange={handelSearchInput}
                    onKeyDown={handleKeyDown}
                    required
                  />
                  <button
                    type="submit"
                    className={`input-group-text ${styles.searchBtn} h-100 py-4`}
                    id="search"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ cursor: "pointer" }}
                    />
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.weathersData}>
              {weatherData ? (
                <Card
                  city={weatherData.city}
                  temp={weatherData.temp}
                  speed={weatherData.speed}
                  description={weatherData.description}
                  humidity={weatherData.humidity}
                />
              ) : (
                <p style={{ color: "#fff", fontSize: "20px" }}>
                  Sorry, can not find this city
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weather;
