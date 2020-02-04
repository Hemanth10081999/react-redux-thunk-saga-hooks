// Action Selector index.js

export const selectsong =(song)=>{

    // always returns a javascript object
    return{
        type: 'SELECTED_SONG',
        payload: song   
    };
};