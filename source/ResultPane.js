import React from "react";
import DieResult from "./DieResult";

class ResultPane extends React.Component {

  rolled_line() {
    var rolled = this.props.rolled;
    var line = [];

    for(var i = 0; i < rolled.success; i++)
        line.push(<DieResult die_type="S" />);

    for(var i = 0; i < rolled.failure; i++)
        line.push(<DieResult die_type="F" />);

    for(var i = 0; i < rolled.advantage; i++)
        line.push(<DieResult die_type="A" />);

    for(var i = 0; i < rolled.threat; i++)
        line.push(<DieResult die_type="T" />);

    for(var i = 0; i < rolled.triumph; i++)
        line.push(<DieResult die_type="+" />);

    for(var i = 0; i < rolled.dispair; i++)
        line.push(<DieResult die_type="-" />);
    return line;
  }

  computed_line() {
    console.log("In computed_line");
    console.log(this.props.computed);

    let computed = this.props.computed;
    let line = [];

    if(computed[0] > 0) {
      for(var i = 0; i < computed[0]; i++)
        line.push(<DieResult die_type="S" />);
    }
    else if(computed[0] < 0) {
      for(var i = 0; i < -computed[0]; i++)
        line.push(<DieResult die_type="F" />);
    }

    if(computed[1] > 0) {
      for(var i = 0; i < computed[1]; i++)
        line.push(<DieResult die_type="A" />);
    }
    else if(computed[1] < 0) {
      for(var i = 0; i < -computed[1]; i++)
        line.push(<DieResult die_type="T" />);
    }

    if(computed[2] > 0) {
      for(var i = 0; i < computed[2]; i++)
        line.push(<DieResult die_type="+" />);
    }

    if(computed[3] > 0) {
      for(var i = 0; i < computed[3]; i++)
        line.push(<DieResult die_type="-" />);
    }
    return line;
  }

  render() {
    return (
      <div id="result-pane">
        <div id="rolled">
          Rolled Dice: <br/>
          {this.rolled_line()}
        </div>
        <div id="computed">
          Computed Result<br/>
          {this.computed_line()}
        </div>
      </div>
    );
  }
}

export default ResultPane;
