import React from "react"
import Game from "../@lekoarts/gatsby-theme-cara/components/PF/yahtzee/Game"
import "../@lekoarts/gatsby-theme-cara/components/PF/yahtzee/AppGame.css"


export default function Yahtzee() {
    return (
        <div>
            <div className="YahtzeeGame">
                <Game></Game>

            </div >
            <div style={{display: "flex"}}>
            <a  href="/project">Projects</a>
            </div>
        </div>
    );
}