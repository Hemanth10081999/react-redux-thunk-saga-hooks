import React, { Component } from 'react'






export default class Weatherform extends Component {





    
    constructor(props) {
        super(props)
        this.state = {
            cityname: ""
        };
    }

    citybox = (e) => {
        this.setState({
            cityname: e.target.value
        });
    }

    updateStore = () => {
        if (this.state.cityname !== "" && this.state.cityname !== this.props.savedcity) {
            this.props.getcity(this.state.cityname)
            let url='http://api.openweathermap.org/data/2.5/weather?q='+this.state.cityname+'&appid=9328b94e7be4310a47cd459b2664068f&units=metric';
            this.props.getweather(url)
        }
    }


    render() {
        // console.log("store "+this.props.savedcity);
        return (
            <div className="inputform">
                <div className="heading">Weather Report</div>
                <div className="textbox">
                    <input type="text" onBlur={this.citybox} placeholder="Enter city name" id="inputcity" />
                </div>
                <div>
                    <input className="btn" onClick={this.updateStore} type="button" value="Submit" id="submitbutton" />
                </div>
            </div>
        );
    }
}