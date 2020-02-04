import React, { useState } from 'react'



export default function Weatherform(props) {

    const [cityname, setCity] = useState(null)


    function citybox(e) {
        setCity(e.target.value)
    }

    function updateStore() {
        if (cityname !== "" && cityname !== props.savedcity) {
            props.getcity(cityname)
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`;
            props.getweather(url)
        }
    }

    return (
        <div className="inputform">
            <div className="heading">Weather Report</div>
            <div className="textbox">
                <input type="text" onBlur={citybox} placeholder="Enter city name" id="inputcity" />
            </div>
            <div>
                <input className="btn" onClick={updateStore} type="button" value="Submit" id="submitbutton" />
            </div>
        </div>
    );

}