import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeypadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else if (button === "FullName") { // Full Name
        this.showFullName();
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    showFullName = () => {
      this.setState({
          result: "John Enrick N. Dizon "
      });
  };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator of John Enrick N. Dizon - IT3A</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    <button className="full-name-button" onClick={() => this.onClick("FullName")}>DIZON</button>
                </div>
            </div>
        );
    }
}

export default App;