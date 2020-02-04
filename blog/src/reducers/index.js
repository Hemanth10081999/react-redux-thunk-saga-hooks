import {combineReducers} from 'redux'; 
import postreducer from './postreducer'
import userreducer from './userreducer'


export default combineReducers({
    post : postreducer,
    user : userreducer
});