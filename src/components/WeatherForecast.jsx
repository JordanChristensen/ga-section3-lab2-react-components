import "./WeatherForecast.css";

export default function WeatherForecast({ forecast }) {
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
}
