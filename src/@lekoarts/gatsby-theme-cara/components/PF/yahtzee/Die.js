import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    // numberWords: ["one", "two", "three", "four", "five", "six"],
    numberWords: ["One", "Two", "Three", "Four", "Five", "Six"],
    val: 5
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }



  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = `YDie `;
    if (locked) classes += "YDie-locked";
    if (rolling) classes += "YDie-rolling";

    let helperIcon = faDiceOne
    
    if(val===2){
       helperIcon = faDiceTwo
    }
    else if(val===3){
      helperIcon = faDiceThree
    }
    else if(val===4){
      helperIcon = faDiceFour
    }
    else if(val===5){
      helperIcon = faDiceFive
    }
    else if(val===6){
      helperIcon = faDiceSix
    }
    else if(val===1){
      helperIcon = faDiceOne
    }

    
    return (
      <div>
      {/* <i className={classes} onClick={this.handleClick} disabled={disabled} /> */}
      <FontAwesomeIcon 

        className={classes}   
        icon={helperIcon} 
        onClick={this.handleClick}
        disabled={disabled}
        size="3x">
      </FontAwesomeIcon>
      </div>
    );
  }
}

export default Die;
