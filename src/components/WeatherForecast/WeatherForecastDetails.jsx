const WeatherForecastDetails = ({ conditions, time }) => {
  return (
    <>
      <p>
        <span>conditions: </span>
        {conditions}
      </p>
      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};
export default WeatherForecastDetails;