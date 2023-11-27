import React from 'react'

function Result({data}) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weatherData = data.timelines.daily;
    return (
        <div className='result'>
            <h4>Weather forcast for: {data.location.name.split(",")[0]}</h4>
            {weatherData.map((weather)=>{
                const date = new Date(weather.time);
                return <div className='details'>
                <div className='dayDate'>
                    <p className='date'>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</p>
                    <p className='day'>{weekday[date.getDay()]}</p>
                </div>
                <div className='temp'>
                    {weather.values.temperatureAvg}&deg;C. 
                </div>
            </div>
            })}
        </div>
    )
}

export default Result