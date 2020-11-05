import React from "react"
import "../@lekoarts/gatsby-theme-cara/components/PF/formsColourBox/FormsColourBox.css"
import BoxList from "../@lekoarts/gatsby-theme-cara/components/PF/formsColourBox/BoxList"


export default function FormsColourBox() {
    return (
        <div>
            <div className="FormsColourBox">
                <BoxList></BoxList>

            </div>
            <a href="/project">Projects</a>
        </div>
    );
}