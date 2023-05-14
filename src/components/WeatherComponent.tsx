import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";


function WeatherComponent() {
    const [forecast, setForecast] = useState<any>();
      const value = useSelector((state: any) => state.map);


  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

    
  const fetchWeather = useCallback(async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${value.lat}&lon=${value.lng}&exclude=minutely,hourly&units=metric&appid=${weatherApiKey}`
    );
    const data = await response.json();
      setForecast(data?.daily.slice(0, 2));
  }, [weatherApiKey,value.lat,value.lng]);

//   useEffect(() => {
//     fetchWeather();
//   }, [fetchWeather]);

  return (
    <div>
      <div className="p-6 z-10">
        <h2 className="text-xl font-bold mb-4">Weather Forecast</h2>
        {forecast?.map((day: any, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">
              {index === 0 ? "Today" : "Tomorrow"}
            </h3>
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-12 h-12 mr-4"
              />
              <div>
                <p className="text-gray-600">{day.weather[0].description}</p>
                <p className="text-gray-600">High: {day.temp.max}°C</p>
                <p className="text-gray-600">Low: {day.temp.min}°C</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherComponent;