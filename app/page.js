"use client"
import { useState } from "react";
import WeatherCard from "./components/bigweathercard";

import WeatherItem from "./components/weathercard";

export default function Home() {

const calgary = "https://api.open-meteo.com/v1/forecast?latitude=51.0501&longitude=-114.0853&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
const edmonton = "https://api.open-meteo.com/v1/forecast?latitude=53.5501&longitude=-113.4687&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
const reddeer = "https://api.open-meteo.com/v1/forecast?latitude=52.2668&longitude=-113.802&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
const lethbridge = "https://api.open-meteo.com/v1/forecast?latitude=49.7&longitude=-112.8186&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"

const [weeklyForecast, setWeeklyForecast] = useState({highs: [''],
  lows: [''],
  dates: [''],
  precip: ['']});
const [forecastList, setForecastList] = useState([])
const [weatherReady, setWeatherReady] = useState(false)

  async function getWeather(){
    try{
        const response = await fetch (
        location
    )
    if (!response.ok) console.log(response.status);
    const data = await response.json();
    setWeeklyForecast({highs: [],
      lows: [],
      dates: [],
      precip: []})
    let high = data.daily.temperature_2m_max
    let low = data.daily.temperature_2m_min
    let date = data.daily.time
    let precip = data.daily.precipitation_sum
    setWeeklyForecast({
      highs: [...high],
      lows: [...low],
      dates: [...date],
      precip: [...precip],
    })
    setWeatherReady(true)

    return data;
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
    
  }
  
const [location, setLocation] = useState(calgary)
  return (
    <div className="max-w-9xl">
      <header className="flex bg-slate-600 items-center justify-center mb-8 rounded-b-full">
        <h1 className="text-slate-50 text-4xl py-8"> Simply Weather</h1>
      </header>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
        <p className="text-2xl mr-2">Show me the weather for: </p>
        <select className="text-2xl rounded bg-slate-600 text-slate-200 px-2"
        value={location}
        onChange={() => setLocation(event.target.value)}>
          <option value={calgary}>Calgary</option>
          <option value={edmonton}>Edmonton</option>
          <option value={lethbridge}>Lethbridge</option>
          <option value={reddeer}>Red Deer</option>
        </select>
        </div>
        <button onClick={getWeather}
        className="text-xl bg-slate-600 rounded-full px-4 py-2 mb-4 mt-2">GO!</button>
      </div>
      {/* I am aware there is a better way to do this, but the API gives all the data I need as separate arrays and trying to change it to a single array was annoying */}
      <div className="flex flex-col justify-center items-center">
        {weatherReady && <WeatherCard forecast={weeklyForecast}></WeatherCard>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={1}></WeatherItem>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={2}></WeatherItem>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={3}></WeatherItem>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={4}></WeatherItem>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={5}></WeatherItem>}
        {weatherReady && <WeatherItem forecast={weeklyForecast} index={6}></WeatherItem>}
      </div>


    </div>
  );
}
