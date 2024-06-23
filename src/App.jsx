import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import WeatherForecastData from "./components/WeatherForecast/WeatherForecastData";

const App = () => {
  return (
    <main>
      <h1>Local Weather</h1>
      <section>
        {WeatherForecastData.map((forecast, idx) => {
          return (
            <WeatherForecast
              key={idx}
              day={forecast.day}
              img={forecast.img}
              imgAlt={forecast.imgAlt}
              conditions={forecast.conditions}
              time={forecast.time}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;
