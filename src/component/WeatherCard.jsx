import { useEffect, useState } from "react";
import Result from "./Result";

const WeatherCard = ()=>{
    const [city,setCity] = useState({city:"delhi"});
    const [showData,setShowData] = useState(null);

    function changefunc(e){
        setCity({
            city : e.target.value
        })
    }

    async function submitfunc(e){
        e.preventDefault();
        if(city.city){
            const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city.city}&apikey=LEOKVOrqftqdmUF7E0auf0FQtnG5cdih`);
            const data = await response.json();
            setShowData(data);
        }
    }

    return (
        <div className="main">
            <form>
                <h1>Enter City:</h1>
                <input type="text" placeholder="enter city" id="city" name="city" value={city["city"]} onChange={changefunc}></input>
                <input type="submit" id="submit" onClick={(e)=>submitfunc(e)} value="show weather forcast"></input>
            </form>
            <div className="result-box">
                {showData?<Result data={showData} key={showData}></Result>:<p className="notAvailable">Please enter city to see data</p>}
            </div>
        </div>
    )
}

export default WeatherCard;