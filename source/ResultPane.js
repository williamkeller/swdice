import React from "react";

class ResultPane extends React.Component {

  computed_line() {
    console.log("In computed_line");
    console.log(this.props.computed);

    let computed = this.props.computed;
    let line = "";

    if(computed[0] > 0) {
      for(var i = 0; i < computed[0]; i++)
        line += "S ";
    }
    else if(computed[0] < 0) {
      for(var i = 0; i < -computed[0]; i++)
        line += "F ";
    }

    if(computed[1] > 0) {
      for(var i = 0; i < computed[1]; i++)
        line += "A ";
    }
    else if(computed[1] < 0) {
      for(var i = 0; i < -computed[1]; i++)
        line += "T ";
    }

    if(computed[2] > 0) {
      for(var i = 0; i < computed[2]; i++)
        line += "+ ";
    }

    if(computed[3] > 0) {
      for(var i = 0; i < computed[3]; i++)
        line += "- ";
    }
    return line;
  }

  render() {
    return (
      <div id="result-pane">
        <div id="rolled">
          Rolled Dice: {this.props.rolled}
        </div>
        <div id="computed">
          Computed Result: {this.computed_line()}
        </div>
      </div>
    );
  }
}

export default ResultPane;
