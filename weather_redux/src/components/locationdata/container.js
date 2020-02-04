import {connect} from 'react-redux';
import {getweather} from '../../actions/getweather';

const mapDispatchToProps =(dispatch)=>{
    return{
        getweather: (url)=>{dispatch(getweather(url))}
    };
};

const mapStateToProps =(state)=>{
    return{
        data:state.weatherData
    };
};

export default connect(mapStateToProps,mapDispatchToProps)