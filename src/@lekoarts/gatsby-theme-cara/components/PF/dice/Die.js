import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

import "./Die.css";

class Die extends Component {

  render() {

    let face = this.props.face
    let helperIcon = faDiceOne
    if(face==="Two"){
       helperIcon = faDiceTwo
    }
    else if(face==="Three"){
      helperIcon = faDiceThree
    }
    else if(face==="Four"){
      helperIcon = faDiceFour
    }
    else if(face==="Five"){
      helperIcon = faDiceFive
    }
    else if(face==="Six"){
      helperIcon = faDiceSix
    }
    
  

    return (
      <div>
        <FontAwesomeIcon icon={helperIcon} className={`Die ${this.props.rolling &&
          "shaking"}`}  />

      </div>
    );
  }
}
export default Die;
