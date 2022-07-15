import React, {useState, useEffect} from 'react';
import './stylesheet/styles.css';

const Weather = () => {

    const [City, setCity] = useState(null);   
    const [Search, setSearch] = useState("Mumbai");      
    useEffect(() => {
        const fetchApi = async () => {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=f1e54a75b1c4bed47a561452a949c466`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [Search])

    return (
        <>
            <div className='body'>
                <div className="maindiv">
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                {!City ? (
                    <p className='error'>No city found</p>
                ) : (
                    <div className="seconddiv">
                        
                        <h2>{Search}</h2>
                        <h3>{City.temp}°C</h3>
                        
                        <p>Pressure : {City.pressure} hPa</p>
                        <p>Humidity : {City.humidity} %</p>

                    </div>
                )
                }
                    
                </div>
            </div>
        </>
    );
}
export default Weather;