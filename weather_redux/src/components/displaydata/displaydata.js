import React, { Component } from 'react'


export default class Dispalydata extends Component {
    render() {

        if (this.props.data !== null) {
            // console.log(this.props.data)
            var maindata = "", temp = "", Humidity = "", windSpeed = "";
            this.props.data.weather.map(data => {
                maindata = data.main
                return null
            })
            temp = this.props.data.main.temp
            Humidity = this.props.data.main.humidity
            windSpeed = this.props.data.wind.speed
            var d = new Date(this.props.data.dt * 1000);
            var formatted = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();

            return (

                <div className="datacontainer">
                    <div className="data">
                        <div>Current Weather : {maindata}</div>
                        <div>Temperature : {temp}</div>
                        <div>Humidity : {Humidity}</div>
                        <div>Wind Speed : {windSpeed}</div>
                        <div>Last Fetched at station : {formatted}</div>
                    </div>
                </div>

            );
        }
        else {
            return null
        }
    }
}
