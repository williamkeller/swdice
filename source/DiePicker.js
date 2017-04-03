import React from "react";

class DiePicker extends React.Component {

  image() {
    let src = "";

    switch(this.props.die_type) {
      case "B":
      case "S":
        src = "images/d6.png";
        break;
      case "A":
      case "D":
        src = "images/d8.png";
        break;
      case "P":
      case "C":
        src = "images/d12.png";
        break;
    };

    return <img src={src} className="die-type" />;
  }

  name() {
    let str = "";

    switch(this.props.die_type) {
      case "B":
        str = "Boost";
        break;
      case "S":
        str = "Setback";
        break;
      case "A":
        str = "Advantage";
        break;
      case "D":
        str = "Difficulty";
        break;
      case "P":
        str = "Proficiency";
        break;
      case "C":
        str = "Challenge";
        break;
    };
    return <span className="die-name">{str}</span>;
  }

  spinUp() {
    this.props.changeDie(this.props.die_type, 1);
  }

  spinDown() {
    this.props.changeDie(this.props.die_type, -1);
  }

  render() {

    return (
      <div className="die-picker">
        {this.image()}
        {this.name()}
        <span className="die-value">{this.props.value}</span>
        <div className="spin-set">
          <button className="spin-up" onClick={this.spinUp.bind(this)}>UP</button>
          <button className="spin-down" onClick={this.spinDown.bind(this)}>DOWN</button>
        </div>
      </div>
    )
  }
}

export default DiePicker;

