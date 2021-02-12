import React from "react"
import Footer from "../@lekoarts/gatsby-theme-cara/components/footer"
import Cards from "../@lekoarts/gatsby-theme-cara/components/PF/cards"
import DataFetch from "../@lekoarts/gatsby-theme-cara/components/PF/dataFetch/DataFetch"


export default function Project() {
  return (
    <div style = {{justifyContent: "center", }}>
 <div className="Pokedex">
   
      <h1>Projects</h1>
      <div style={{width: "80%", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
      <Cards title="Pokemon Game" link="/pokepage"></Cards>
      <Cards className ="HangmanApp" title="Hangman Game" link="/hangmanpage"></Cards>
      <Cards title="Dice Game" link="/diceGame"></Cards>
      <Cards title="Box Colours" link="/colourBoxes"></Cards>
      <Cards title="Lights Out Game" link="/lightsout"></Cards>
      <Cards title="Forms Ex" link="/FormsColourBox"></Cards>
      <Cards title="ToDo List" link="/toDo"></Cards>
      <Cards title="Yahtzee Game" link="/yahtzee"></Cards>
      <Cards title="Deal Cards" link="/deckCards"></Cards>
      <Cards title="Dad Jokes" link="/dadJokes"></Cards>
      <Cards title="Stoic Calendar" link="/stoicCalendar"></Cards>
      <DataFetch></DataFetch>
      </div>
      </div>
      <div>
    </div>

    </div>
  );
}