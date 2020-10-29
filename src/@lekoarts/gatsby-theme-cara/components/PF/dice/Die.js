import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

import "./Die.css";

class Die extends Component {
  render() {
    let fontdie = (`faDice${this.props.face}`)
    console.log(fontdie)
    return (
      <div>
      <i
        className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
          "shaking"}`}
      />
                <FontAwesomeIcon className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
          "shaking"}`} icon={faDiceOne} />
                <FontAwesomeIcon icon={`${fontdie}`} />
                <FontAwesomeIcon icon={`faDice${this.props.face}`} />
                <FontAwesomeIcon icon={fontdie} />

      </div>
    );
  }
}
export default Die;
