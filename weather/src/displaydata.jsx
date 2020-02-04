import React from 'react'
import './index.css'

const Dispalydata = (props) => {

    var maindata = "", temp = "", humidity = "", windSpeed = "", lastfetch = ""
    if (props.ready) {
        props.data.weather.map(data => {
            maindata = data.main
        })
        temp = props.data.main.temp
        humidity = props.data.main.humidity
        windSpeed = props.data.wind.speed

        //---------------------------------------------------
        var d = new Date(props.data.dt * 1000);
        var formatted = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();




        
        return (
            <div className="flexboxouter">
                <div className="Displaybox">
                    <div className="intext">
                        <div>Current Weather : {maindata}</div>
                        <div>Temperature : {temp}</div>
                        <div>Humidity : {humidity}</div>
                        <div>Wind Speed : {windSpeed}</div>
                        <div>Last Fetched at station : {formatted}</div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>Select an option to display data</div>
        );
    }
}

export default Dispalydata