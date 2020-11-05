import React from "react"
import "../@lekoarts/gatsby-theme-cara/components/PF/deckCards/App.css"
import Deck from "../@lekoarts/gatsby-theme-cara/components/PF/deckCards/Deck"


export default function DeckCards() {
    return (
        <div>
            <div className="deckCards">
                <Deck></Deck>

            </div >
            <div style={{display: "flex"}}>
            <a  href="/project">Projects</a>
            </div>
        </div>
    );
}