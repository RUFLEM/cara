import React from "react"
import "../@lekoarts/gatsby-theme-cara/components/PF/lightsout/lightsout.css"
import Board from "../@lekoarts/gatsby-theme-cara/components/PF/lightsout/Board"


export default function LightsOut() {
    return (
        <div>
            <div className="lightsout">
            <Board></Board>
            </div>
            <a href="/project">Projects</a>
        </div>
    );
}