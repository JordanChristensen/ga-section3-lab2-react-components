import WeatherForecast from "./components/WeatherForecast";
import WeatherForecastData from "./data/weatherForecastData";

const App = () => {
  return (
    <main>
      <h1>Local Weather</h1>
      <section>
        {WeatherForecastData.map((forecast, idx) => {
          return <WeatherForecast key={idx} forecast={forecast} />;
        })}
      </section>
    </main>
  );
};

export default App;
