import {combineReducers} from 'redux'
import weatherreducer from './weatherreducer'
import cityreducer from './cityreducer'

export default combineReducers({
    weatherData:weatherreducer,
    city:cityreducer
});