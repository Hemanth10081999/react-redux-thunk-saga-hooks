import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchuser} from '../actions'

class Fetchuser extends Component {

    componentDidMount(){
        this.props.fetchuser(this.props.userid);
    }

    render(){


        // const userdetail= this.props.users.find(user => user.id===this.props.userid);

        if(!this.props.users){
            return null;
        }

        return(
            <div>{this.props.users.name}</div>
        );
    }
}

const mapStateToProps =(state,ownProps)=>{
    return{users:state.user.find(user => user.id===ownProps.userid)};
}


export default connect(mapStateToProps,{fetchuser})(Fetchuser);

