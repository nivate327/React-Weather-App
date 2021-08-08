import React, {useState, useEffect} from 'react';

function WeatherCard({weatherdata}) {
  const [weatherIcon, setweathermood]=useState("");
  
  let { name,
        temp,
        humidity,
        speed,
        pressure,
        country,
        sunset,
        weathermood
      }=weatherdata;
      
  useEffect(()=>
  {
    if(weathermood)
    {
    switch(weathermood) {
      case 'Clouds':
        setweathermood("fa-cloud");
        break;
      
      case 'Rain':
        setweathermood("fa-cloud-rain");
        break;
        
      case 'Sunny':
        setweathermood("fa-sun");
        break;
        
      case 'Haze':
        setweathermood("fa-smog");
        break;
        
     case 'Mist':
        setweathermood("fa-smog");
        break;
        
      case 'Drizzle':
        setweathermood("fa-cloud-rain");
        break;
      
      default:
        setweathermood("fa-clear");
    }
    
    }
  },[weathermood]);
  
  let sec=sunset;
  let date=new Date(sec * 1000);
  let time=`${date.getHours()} : ${date.getMinutes()}`;
  
  return (
    <>
  
      <div className="row d-flex justify-content-center">
        <div className="col-lg-9 col-md-9 col-sm-10 col-11 myCard">
            
              <i className={`fas ${weatherIcon} fa-4x icon my-4 text-center`}></i>
              
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8 bg-dark">
                     <div className="tempInfo  text-white">
                       <h1 className="pl-4 temp">{temp} &#8451;</h1>
                       
                       <div className="location pl-5">
                         <h4 className="d-flex flex-column">{weathermood}   <span className="area">{name}, {country}</span></h4>
                        
                       </div>
                     </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4 bgColor d-flex align-items-center justify-content-center">
                    <div className="date-time ">
                    <h4 className="d-flex flex-column">{new Date().toLocaleDateString()}  <span className="area">{new Date().toLocaleTimeString()}</span></h4>  
                    </div>      
                    
        </div>
             
            </div>
            
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-between py-4">
                 <div className="d-flex">
                   <i className="fas fa-sun text-center mr-1 mr-lg-3 mr-md-3 mt-2 iconTemp"></i>
                    <h6 className="d-flex flex-column mt-2 mt-lg-1 mt-md-1 mt-sm-1 ">{time} PM  <span className="areas">Sunset</span></h6>
                 </div>
                 
                 <div className="d-flex">
                 <span className="iconify iconTemp mr-1 mr-lg-3 mr-md-3 mt-2" data-icon="wi:humidity"></span>
                   <h6 className="d-flex flex-column mt-2 mt-lg-1 mt-md-1 mt-sm-1 ">{humidity} <span className="areas">Humidity</span></h6>
                 </div>
                 
                 <div className="d-flex">
                   <i className="fas fa-tachometer-alt text-center iconTemp mr-1 mr-lg-3 mr-md-3 mt-2"></i>
                   <h6 className="d-flex flex-column mt-2 mt-lg-1 mt-md-1 mt-sm-1 ">{pressure} <span className="areas">Pressure</span></h6>
                 </div>
                 
                 <div className="d-flex">
                   <i className="fas fa-bolt text-center iconTemp mr-1 mr-lg-3 mr-md-3 mt-2"></i>
                   <h6 className="d-flex flex-column mt-2 mt-lg-1 mt-md-1 mt-sm-1">{speed} <span className="areas">Speed</span></h6>
                 </div>
              </div>
            </div>
        </div>
      </div>    
    </>
  );
}

export default WeatherCard;




