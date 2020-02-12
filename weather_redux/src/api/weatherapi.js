import Axios from "axios";


async function weathercall(url) {
    var responsedata={}
    await Axios.get(url)
        .then(res=>{
            responsedata=res.data
        })        
        .catch(error => {
            if(error.response.status===404){
                alert("enter correct city name")
                responsedata=error.response.status
            }
        });

    if(responsedata===404){
        return null;
    }
    console.log(responsedata);
    return responsedata;
}

export default weathercall