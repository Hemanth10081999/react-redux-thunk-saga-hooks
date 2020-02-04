import {connect} from 'react-redux'
import {getcity} from '../../actions/city'
import {getweather} from '../../actions/getweather'


const mapDispatchToProps=(dispatch)=>{
    return{
        getcity: (city)=>{dispatch(getcity(city))},
        getweather: (url)=>{dispatch(getweather(url))}
    };
};

const mapStateToProps=(state)=>{
    return{
        savedcity:state.city
    };
};

export default connect(mapStateToProps,mapDispatchToProps);