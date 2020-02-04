import {connect} from 'react-redux'

const mapStateToProps =(state)=>{
    return{
        data:state.weatherData
    };
};

export default connect(mapStateToProps,null);