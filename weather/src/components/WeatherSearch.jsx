import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';

function WeatherSearch() {
  
  const [search, setSearch]=useState("Pune");
  const [weatherdata, setweather]=useState({});
  
  const inputEvent=(e)=>
  {
    setSearch(e.target.value);
  }
  
  const getWeatherApi=async()=>
  {
    try {
      let url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d6f736264fea7a05b64dc573806d9170`;
      
      let res=await fetch(url);
      let data=await res.json();
      
      console.log(data);
      
      let { humidity, temp, pressure }=data.main;
      let { name }=data;
      let { country, sunset }=data.sys;
      let { main:weathermood }=data.weather[0];
      let { speed }=data.wind;
      
      let myWeatherObj={
        name,
        temp,
        humidity,
        pressure,
        country,
        speed,
        sunset,
        weathermood
      }
      
      setweather(myWeatherObj);
      
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(()=>
  { 
     getWeatherApi();
    
  },[]);
  
  return (
      <>
        <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8 col-md-8 col-sm-10 col-10 my-5">
          
          <div className="searchBar d-flex justify-content-center">
            <div className="form-group">
              <input className="form-control" type="text" name="" id="" value={search} placeholder="Search.." onChange={inputEvent}/>
            </div>
            <button className="btn btnColor h-25" type="submit" onClick={getWeatherApi}>
              Search
            </button>
          </div>
            
          </div>
      </div>
      
      <WeatherCard weatherdata={weatherdata}/>
  </div>
  
  
      </>
  );
}

export default WeatherSearch;
