export const getweather =(url)=>{
    return{
        type:'SET_WEATHER',
        payload: url
    };
}