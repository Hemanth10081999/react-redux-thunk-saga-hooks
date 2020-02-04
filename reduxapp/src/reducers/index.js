// Reducer index file
import {combineReducers} from 'redux'; 

const songsreducer =()=>{

    //return array of objects
    return[
        {title:'Havana' , duration:'3:12'},
        {title:'On my way' , duration:'4:22'},
        {title:'Dont let me down' , duration:'5:00'},
        {title:'Bad boys' , duration:'3:45'}
    ];
};

const selectedsongreducer =(selectedSong=null,action)=>{
    if(action.type==='SELECTED_SONG'){
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
    songs: songsreducer ,
    selectedSong: selectedsongreducer
});