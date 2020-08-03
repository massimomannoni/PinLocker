import React, { Component } from 'react';
import Keyboard from './components/keyboard/Keyboard';
import Display from "./components/display/Display";
import Header from "./components/header/Header";
import processRequest from "./common/functions";
import "./App.css";

export default class App extends Component {

  constructor() {
   super();

   this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    this.setState(processRequest(this.state, event.key));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  state = {
    trials : null,
    value : null,
    locked : false,
    isKeyboardVisible : true,
    areNumbersDisabled : false,
    message : null
  }

  handleClick = btnClickedLabel => {
      this.setState(processRequest(this.state, btnClickedLabel));
  };

  render(){

    return (
      <div className="locker-app">
        <Header label={this.state.locked} message={this.state.message}/>
        <Display code={this.state.value} />
        {this.state.isKeyboardVisible && (
          <Keyboard eventHandler={this.handleClick} disabled={this.state.areNumbersDisabled} />
        )}
      </div>
    );
  }
}

