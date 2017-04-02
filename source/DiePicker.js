import React from "react";

class DiePicker extends React.Component {

  spinUp() {
    this.props.changeDie(this.props.die_type, 1);
  }

  spinDown() {
    this.props.changeDie(this.props.die_type, -1);
  }

  render() {

    return (
      <div className="die-picker">
        {this.props.die_type}&nbsp;&nbsp;
        {this.props.value} &nbsp;&nbsp;
        <button className="spin-up" onClick={this.spinUp.bind(this)}>UP</button>
        <button className="spin-down" onClick={this.spinDown.bind(this)}>DOWN</button>
      </div>
    )
  }
}

export default DiePicker;

