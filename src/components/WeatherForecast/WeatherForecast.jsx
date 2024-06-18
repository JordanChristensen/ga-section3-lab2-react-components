import "./WeatherForecast.css";
import WeatherForecastTitle from "./WeatherForecastTitle";
import WeatherForecastImage from "./WeatherForecastImage";
import WeatherForecastDetails from "./WeatherForecastDetails";

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherForecastTitle day={day} />
      <WeatherForecastImage img={img} imgAlt={imgAlt} />
      <WeatherForecastDetails conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;
