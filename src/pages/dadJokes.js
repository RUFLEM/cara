import React from "react"
import "../@lekoarts/gatsby-theme-cara/components/PF/dadJokes/App.css"
import JokeList from "../@lekoarts/gatsby-theme-cara/components/PF/dadJokes/JokeList"


export default function DadJokes() {
    return (
        <div>
            <div className="dadJokes">
                <JokeList></JokeList>

            </div >
            <div style={{display: "flex"}}>
            <a  href="/project">Projects</a>
            </div>
        </div>
    );
}