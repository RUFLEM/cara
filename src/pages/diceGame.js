import React from "react"
import RollDice from "../@lekoarts/gatsby-theme-cara/components/PF/dice/RollDice"
import "../@lekoarts/gatsby-theme-cara/components/PF/dice/DiceGame.css"


export default function HangmanPage() {
    return (
        <div>
            <div className="DiceGame">
                <RollDice></RollDice>
            </div>
            <a href="/project">Projects</a>
        </div>
    );
}