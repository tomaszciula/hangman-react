import React, { Component } from "react";
import "./Proverb.css";

const mySentence = "Baba z wozu koniom lżej";
const size = mySentence.length;

    function ChangeLettersToUnreadable() {
      let haslo1 = "";
      for (let index = 0; index < size; index++) {
        if (mySentence[index] === " ") {
          haslo1 += " ";
        } else {
          haslo1 += "-";
        }
        //    haslo1 += "-";
      }
      return haslo1;
    }

class Proverb extends Component {
  constructor(){
    super();
    this.state={
      ChangeLettersToUnreadable
    };
  }
  render() {
    

    return (
      <header className="Proverb__header">
        <h1>{this.state.ChangeLettersToUnreadable()}</h1>
      </header>
    );
  }
}

export default Proverb;
