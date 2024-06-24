import "./styles/WeatherForecast.css";
import WeatherForecastData from "./data/weatherForecastData";

export default function App() {
  return (
    <main>
      <h1>Local Weather</h1>
      <section>
        {WeatherForecastData.map((forecast) => {
          return (
            <section className="weather">
              <h2>{forecast.day}</h2>
              <img src={forecast.img} alt={forecast.imgAlt} />
              <p>
                <span>conditions: </span>
                {forecast.conditions}
              </p>
              <p>
                <span>time: </span>
                {forecast.time}
              </p>
            </section>
          );
        })}
      </section>
    </main>
  );
}
