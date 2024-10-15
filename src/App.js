import "./App.css";
import Weather from "./views/WeatherPage";

function App() {
  return (
    <div className="App">
      <div
        className="bluer"
        style={{ position: "absolute", top: "-5px", left: "-5px" }}
      ></div>
      <Weather />
      <div className="bluer" style={{ position: "absolute", top: "60%" }}></div>
      <div
        className="bluer"
        style={{ position: "absolute", top: "-50px", left: "55%" }}
      ></div>
      <div
        className="bluer"
        style={{ position: "absolute", top: "40%", right: "0" }}
      ></div>
    </div>
  );
}

export default App;
