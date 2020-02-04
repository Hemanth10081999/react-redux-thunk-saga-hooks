import React from 'react';
import './index.css'


const Form = (props) => {

  var tempcity = "", data = {}, boolean = false

  const modifystate = (e) => {
    tempcity = e.target.value
  }


  const buttonclick =  () => {
    console.log(tempcity)
    if (tempcity !== "") {
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${tempcity}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`)
        .then(res => console.log(res))
        // .then(json => {
        //   if (json.cod === "404") {
        //     alert("Enter the correct city name");
        //   }
        //   else {
        //     boolean = true
        //     props.modifydata(json, boolean)
        //   }
        // })
        .catch((error) => {
          alert(error);
        });
    }
  }


  const locationclick = () => {
    console.log("location click")
    useloc()
  }


  const useloc = async () => {
    console.log("use location click")
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(getloc, geoerror);
    }
    else {
      alert("Geo location is not supported by your browser")
    }
  }

  const getloc = async (position) => {
    console.log("get location click")
    await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`)
      .then(res => res.json())
      // .then(json => {
      //   if (json.cod === "404") {
      //     alert("Enter the correct city name");
      //   }
      //   else {
      //     boolean = true
      //     props.modifydata(json, boolean)
      //   }
      // })
      .catch((error) => {
        alert(error.message);
      });


  }

  const geoerror = (err) => {
    console.log(err);
  }


  return (
    <div>
      <div className="flexboxouter">
        <div style={{ margin: "0px" }}> <h3>Enter city name:</h3></div>
        <div style={{ margin: "20px" }} ><input type="text" id="cityinput" onChange={modifystate} /></div>
        <div style={{ marginTop: "20px" }}  ><button onClick={() => buttonclick()}>Get data</button></div>
      </div>
      <h4 style={{ margin: "0px" }}>OR</h4>
      <h3 style={{ cursor: "pointer" }} onClick={() => locationclick()}>Click to use My location!</h3>
    </div>
  );
}
export default Form;