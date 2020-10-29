import React from "react"
import Hangman from "../@lekoarts/gatsby-theme-cara/components/PF/hangman/Hangman"
import "../@lekoarts/gatsby-theme-cara/components/PF/hangman/HangmanPage.css"


export default function HangmanPage() {
    return (
        <div>
            <div className="HangmanApp">
                <Hangman></Hangman>
            </div>
            <a href="/project">all games</a>
        </div>
    );
}