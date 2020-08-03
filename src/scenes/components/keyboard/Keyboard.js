import React from "react";
import PropTypes from "prop-types";
import Button from "./button/Button"
import "./Keyboard.css"

export default class KeyBoard extends React.Component {

  static propTypes = {
    eventHandler: PropTypes.func,
    disabled: PropTypes.bool
  };

  handleClick = btnClickedLabel => {
    this.props.eventHandler(btnClickedLabel);
  };

  render() {

    return (
      <div className="locker-keyboard">
        <div>
          <Button label="1" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="2" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="3" eventHandler={this.handleClick} disabled={this.props.disabled}/>
        </div>
        <div>
          <Button label="4" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="5" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="6" eventHandler={this.handleClick} disabled={this.props.disabled}/>
        </div>
        <div>
          <Button label="7" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="8" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="9" eventHandler={this.handleClick} disabled={this.props.disabled}/>
        </div>
        <div>
          <Button label="Clear" eventHandler={this.handleClick} />
          <Button label="0" eventHandler={this.handleClick} disabled={this.props.disabled}/>
          <Button label="Unlock" eventHandler={this.handleClick} disabled={!this.props.disabled}/>
        </div>
      </div>
    );
  }
}