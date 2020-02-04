export default (state=null,action)=>{
    switch(action.type){
        case 'SET_WEATHER_ASYNC':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}