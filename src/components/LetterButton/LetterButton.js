import React, { Component } from "react";
import "./LetterButton.css";



class LetterButton extends Component {
  render(){
  return (
      <button className="LetterButton__button">
      {this.props.value}
  </button>
  )}
}

export default LetterButton;