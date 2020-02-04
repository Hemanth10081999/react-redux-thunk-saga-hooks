import React from 'react'
import Weatherform from './weatherform/index'
import Displaydata from './displaydata/index'
import Locationdata from './locationdata/index'

const App =()=>{
    return(
        <div>
        <Locationdata />
        <Weatherform />
        <Displaydata />
        </div>
       
    );
}

export default App;