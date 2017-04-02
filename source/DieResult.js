import React from "react";

class DieResult extends React.Component {

  source() {
    let src = "";

    switch(this.props.die_type) {
      case "S":
        src = "images/r_success.png";
        break;
      case "F":
        src = "images/r_failure.png";
        break;
      case "A":
        src = "images/r_advantage.png";
        break;
      case "T":
        src = "images/r_threat.png";
        break;
      case "+":
        src = "images/r_triumph.png";
        break;
      case "-":
        src = "images/r_dispair.png";
        break;
    }

    return src;
  }

  render() {
    return (
      <img src={this.source()} className="result-die" />
    );
  }
}

export default DieResult;
