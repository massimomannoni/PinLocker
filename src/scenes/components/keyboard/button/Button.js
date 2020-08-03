import React from "react";
import PropTypes from "prop-types";
import "./Button.css"

export default class Button extends React.Component {
  
  static propTypes = {
    eventHandler: PropTypes.func,
    disabled: PropTypes.bool
  };
  
  handleClick = () => {
    this.props.eventHandler(this.props.label);
  };

  render() {

    return (
      <div className="locker-btn">
        <button onClick={this.handleClick} disabled={this.props.disabled}>
          {this.props.label}
        </button>
      </div>
    );
  }
}
