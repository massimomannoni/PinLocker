import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

export default class Display extends React.Component {

  static propTypes = {
    code: PropTypes.string,
  };

  render(){
      return (
        <div className="locker-display">
          <div>{this.props.code}</div>
        </div>
      );
  }
}