import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from'./index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class Clock extends Component{
    constructor(props){
        super(props);
        this.date=new Date();
        this.state={
            second:this.date.getSeconds() ,
            hour:this.date.getHours(),
            minute:this.date.getMinutes(),
            day:this.date.getDay(),
            month:(this.date.getMonth()+1),
            year:this.date.getFullYear()
        };
    }
    render(){
        setInterval(() => {
            let date=new Date();
            this.setState({hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}); 
            this.setState({day:date.getDay(),month:(date.getMonth()+1),year:date.getFullYear()});    
        }, 10);
        return (
            <div>
                <h2 style={{margin:"30px"}}>React Clock!!!</h2>
                <h3 className="time">{this.state.hour} : {this.state.minute} : {this.state.second}</h3>
                <h5 style={{margin:"10px"}}>Today's date: {this.state.day}-{this.state.month}-{this.state.year}</h5>

            </div>
        );
    }
}

class Timer extends Component{
    constructor(props){
        super(props);
        this.state={
            time:new Date(),
            prev:0,
            minute:0,
            count:0
        };
    }

    clr = () => {
        this.setState({count:0,minute:0});
        const myNode = document.getElementById("laplist");
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        }
    }

    addlap=()=>{

        var node = document.createElement("LI");
        var textnode = document.createTextNode("Lap time "+this.state.minute+" : "+this.state.count);
        node.appendChild(textnode);
        document.getElementById("laplist").appendChild(node);
    }

    componentDidMount(){
        this.myinterval=setInterval(()=>{
            let date=new Date();

            if(this.state.prev!==date.getSeconds()){
                this.setState({count:this.state.count+1});
                if(this.state.count===60){
                    this.setState({count:0,minute:this.state.minute+1});
                }
                this.setState({prev:date.getSeconds()});
            }
  
        },10)
    }

    render(){
        return(
            <div>
                <h2 style={{marginTop:"60px", marginBottom:"0px"}}>React Stopclock</h2>
                <h1 style={{margin:"10px"}}>{this.state.minute.toFixed(0)} : {this.state.count.toFixed(0)}</h1>
                <div className="outer">

                    <div className="inner">
                    <button className="stylebut" onClick={this.clr}>Clear</button>
                    </div>
                    <div className="inner">
                    <button className="stylebut" onClick={this.addlap}>Lap</button>
                    </div>
                </div>

                <div className="outer">
                <div className="lapbox">
                    <div id="laplist">

                    </div>
                </div>
                </div>
            </div>
        );
    }

    componentWillUnmount(){
        clearInterval(this.myinterval);
    }
}


class Main extends Component{
    constructor(props){
        super(props);
        this.state={flag:0};
    }
    check =()=>{
        if(document.getElementById("selector").checked){
            document.getElementById("selector").checked = true;
            this.setState({flag:0});
        }
        else{
            document.getElementById("selector").checked = false;
            this.setState({flag:1});
        }
    }
    render(){

        
    if(this.state.flag===0){
        return(
            <div>
                
                <div className="outer">
                    <div className="inner">
                        <h2 style={{fontSize:"20px"}}>Stopclock</h2>
                    </div>
                    
                    <div className="inner">
                        <label className="switch">
                            <input type="checkbox" id="selector" checked onClick={this.check}/>
                            <div className="switch-btn"></div>
                        </label>
                    </div>
                    <div className="inner">
                        <h2 style={{fontSize:"20px"}}>Clock</h2>
                    </div>
                </div>
                <Clock />
                </div>
            );
        }
            else{
                return(
                    <div>
                    <div className="outer">
                        <div className="inner">
                            <h2 style={{fontSize:"20px"}}>Stopclock</h2>
                        </div>
                        <div className="inner">
                            <label className="switch">
                                <input type="checkbox" id="selector" unchecked onClick={this.check}/>
                                <div className="switch-btn"></div>
                            </label>
                        </div>
                        <div className="inner">
                            <h2 style={{fontSize:"20px"}}>Clock</h2>
                        </div>
                    </div> 
                    <Timer />  
                    </div>
            );
        }

    }
}



ReactDOM.render(<Main />,document.getElementById("first"));

serviceWorker.unregister();