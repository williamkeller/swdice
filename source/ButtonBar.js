import React from "react";

class ButtonBar extends React.Component {

  render() {
    return (
      <div id="button-bar">
        <button id="roll-button" onClick={this.props.roll}>Roll</button>
        <button id="clear-button" onClick={this.props.clear}>Clear</button>
      </div>
    );
  }
}

export default ButtonBar;
