import { useState } from 'react'

export default function Locationdata(props) {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)


    async function useloc() {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition(getloc, geoerror);
        }
        else {
            alert("Geo location is not supported by your browser")
        }
    }

    async function getloc(position) {
        console.log(position.coords.latitude, position.coords.longitude)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }

    function geoerror(err) {
        alert(err);
    }


    useloc();
    if (props.data === null && latitude != null && longitude != null) {
        props.getweather(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`);
        console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9328b94e7be4310a47cd459b2664068f&units=metric`)
        return null;
    }
    return null;

}