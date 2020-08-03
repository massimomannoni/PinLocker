import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

export default class Header extends React.Component {

  static propTypes = {
    label: PropTypes.bool,
    message: PropTypes.string
  };

  render() {
    return (
      <div className="locker-header">
        <div className="locker-header-top">
          {this.props.label ? "Unlocked" : "Locked"}
        </div>
        <div className="locker-header-bottom">
          {this.props.message}
        </div>
      </div>
    );
  }
}
