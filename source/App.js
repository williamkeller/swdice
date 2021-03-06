import React from "react";
import { render } from "react-dom";
import DiePicker from "./DiePicker";
import ButtonBar from "./ButtonBar";
import ResultPane from "./ResultPane";

import style from "./swdice.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.D_Boost = [ [""], [""], ["S"], ["S", "A"], ["A", "A"], ["A"] ];
    this.D_Setback = [ [""], [""], ["F"], ["F"], ["T"], ["T"] ];
    this.D_Ability = [ [""], ["S"], ["S"], ["S", "S"], ["A"], ["A"], ["S", "A"], ["A", "A"] ];
    this.D_Difficulty = [ [""], ["F"], ["F", "F"], ["T"], ["T"], ["T"], ["T", "T"], ["F", "T"] ];
    this.D_Proficiency = [ [""], ["S"], ["S"], ["S", "S"], ["S", "S"], ["A"], ["S", "A"],
      ["S", "A"], ["S", "A"], ["A", "A"], ["A", "A"], ["+"] ];
    this.D_Challenge = [ [""], ["F"], ["F"], ["F", "F"], ["F", "F"], ["T"], ["T"],
      ["F", "T"], ["F", "T"], ["T", "T"], ["T", "T"], ["-"] ];
    this.dice_sets = [ ["B", this.D_Boost], ["A", this.D_Ability], ["P", this.D_Proficiency],
                       ["S", this.D_Setback], ["D", this.D_Difficulty], ["C", this.D_Challenge] ];
    this.state = this.default_state();
  }

  default_state() {
    return { B: 0, A: 0, P: 0, S: 0, D: 0, C: 0, Rolled: "", Computed: "", Empty: true };
  }

  roll() {
    let rolls = { success: 0, failure: 0, advantage: 0, threat: 0, triumph: 0, dispair: 0 };
    let that = this;

    this.dice_sets.forEach(function(set) {
      for(var i = 0; i < that.state[set[0]]; i++) {
        that.roll_die(rolls, set[1]);
      }
    });

    let computed = this.compute_rolls(rolls);
    this.setState( { Rolled: rolls, Computed: computed, Empty: false } );
  }

  clear() {
    this.setState(this.default_state());
  }

  changeDie(type, amount) {
    if((this.state[type] + amount) < 0)
      return;

    let changes = {};
    changes[type] = this.state[type] + amount;
    this.setState(changes); 
  }

  roll_die(rolls, die_set) {
    let roll = die_set[this.rand_roll(die_set.length)];

    roll.forEach((r) => {
      switch(r) {
        case "S":
          rolls.success += 1;
          break;
        case "F":
          rolls.failure += 1;
          break;
        case "A":
          rolls.advantage += 1;
          break;
        case "T":
          rolls.threat += 1;
          break;
        case "+":
          rolls.triumph += 1;
          break;
        case "-":
          rolls.dispair += 1;
          break;
      }
    });

    console.dir(rolls);
    return rolls;
  }

  rand_roll(n) {
    return Math.floor(Math.random() * n);
  }

  compute_rolls(rolls) {
    let success = 0;
    let advantage = 0;
    let triumph = 0;
    let dispair = 0;

    success = rolls.success + rolls.triumph - rolls.failure - rolls.dispair;
    advantage = rolls.advantage - rolls.threat;

    return [success, advantage, triumph, dispair];
  }

  render() {
    return (
      <div id="main">
        <div id="dice-pickers">
          <DiePicker die_type="B" value={this.state.B} changeDie={this.changeDie.bind(this)} />
          <DiePicker die_type="A" value={this.state.A} changeDie={this.changeDie.bind(this)} />
          <DiePicker die_type="P" value={this.state.P} changeDie={this.changeDie.bind(this)} />
          <DiePicker die_type="S" value={this.state.S} changeDie={this.changeDie.bind(this)} />
          <DiePicker die_type="D" value={this.state.D} changeDie={this.changeDie.bind(this)} />
          <DiePicker die_type="C" value={this.state.C} changeDie={this.changeDie.bind(this)} />
        </div>

        <ButtonBar roll={this.roll.bind(this)} clear={this.clear.bind(this)} />

        <ResultPane rolled={this.state.Rolled} computed={this.state.Computed}
                    empty={this.state.Empty} />
      </div>
    );
  }
}

render(<App />, document.getElementById("container"));
