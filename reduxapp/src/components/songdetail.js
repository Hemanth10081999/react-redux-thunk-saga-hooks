import React from 'react'
import {connect} from 'react-redux'

const Songdetail = (props) =>{
    
    if(!props.song){
        return(
            <div>my selected song</div>
        );
    }

    return(
    <div>{props.song.title}</div>
    );
};


const mapStateToProps = (state) =>{
    return{song:state.selectedSong};
}


export default connect(mapStateToProps)(Songdetail)