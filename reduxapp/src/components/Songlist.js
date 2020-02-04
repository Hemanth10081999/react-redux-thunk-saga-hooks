import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectsong} from '../actions'

class Songlist extends Component{
    
    renderlist(){
        console.log(this.props.selectsong,"console log from songlist")
        return this.props.songs.map(song=>{
            return(
                <div key={song.title}>
                    <div>{song.title}</div>
                    <button onClick={()=>this.props.selectsong(song)}>Select song</button>
                </div>
            );
        });
    }   
    
    
    render(){
        console.log(this.props.songs)
        return(
        <div>{this.renderlist()}</div>
        );
    }
}

const mapStateToProps =(state)=>{
    console.log(state)
    return {songs:state.songs};   
}

const mapDispatchToProps = (dispatch) => {
    return{
        selectsong: (song)=>{dispatch(selectsong(song))}
    };
};




export default connect(mapStateToProps,mapDispatchToProps)(Songlist);