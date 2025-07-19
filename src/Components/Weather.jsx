import { useState } from "react"
import axios from "axios"

function Weather()
{
    const[city,setCity]=useState("")
    const[weather,setWeather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setDesc]=useState("")

    function handleCity(event){
        setCity(event.target.value)
    }

    function getWeather()
    {
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95a85dd59d865555b611337f791c2a86`)

        weatherData.then(function(success)
        {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)
        })
    }
    return(
        <div className="bg-blue-200 w-full h-full p-9 flex justify-center ">
            <div className= "bg-blue-100 shadow-md w-80 h-72 text-center p-2 rounded-2xl m-4">
            <h1 className="font-semibold">Weather Report</h1>
            <p className="mb-4 font-extralight">I can give you a weather report about your city!</p>
            <input onChange={handleCity} type="text" placeholder=" Enter" className="border rounded-xl p-1 bg-white border-gray-200 mb-2" /> <br></br>
            <button onClick={getWeather} type="submit" className="bg-blue-400 border rounded-lg p-1 w-28 mb-3">Get report</button>
            <div className="bg-slate-50 w-44 h-24 flex flex-col items-center justify-center text-center rounded-xl ml-16 text-xs">
            <p>Weather: {weather}</p>
            <p>Temperature: {temp}</p>
            <p>Description: {desc}</p>
            </div>
            </div>
        </div>
    )
}
export default Weather