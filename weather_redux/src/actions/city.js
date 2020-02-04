export const getcity=(city)=>{
    // console.log("from action received data",city);
    return{
        type:"CITY_NAME",
        payload:city
    };
}