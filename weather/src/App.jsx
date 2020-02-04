import React, { Component } from 'react';
import './index.css';
import Form from './form.jsx'
import Dispalydata from './displaydata.jsx';


export default class App extends Component {
  constructor(props) {
    let cityname = ""
    super(props)
    this.state = {
      statedata: "",
      stateready: false
    };
  }


  // get users current position---------------------------------------

  modifydata = (data, ready) => {
    this.setState({
      statedata: data,
      stateready: ready
    });

  }

  //---------------------------------------------------------------------
  render() {
    return (
      <div className="Fullbox">
        <Form modifydata={this.modifydata} />
        <Dispalydata data={this.state.statedata} ready={this.state.stateready} />
      </div>
    );
  }
}