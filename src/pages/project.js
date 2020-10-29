import React from "react"
import Footer from "../@lekoarts/gatsby-theme-cara/components/footer"
import Cards from "../@lekoarts/gatsby-theme-cara/components/PF/cards"


export default function Project() {
  return (
    <div>
 <div className="Pokedex">
      <h1>Projects</h1>
      <Cards title="Pokemon Game" link="/pokepage"></Cards>
      <Cards className ="HangmanApp" title="Hangman Game" link="/hangmanpage"></Cards>
      <Cards title="Dice Game" link="/diceGame"></Cards>
      </div>
      <div>
      <Footer></Footer>
    </div>
    </div>
  );
}