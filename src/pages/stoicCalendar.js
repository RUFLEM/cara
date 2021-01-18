import React from "react"
import "../@lekoarts/gatsby-theme-cara/components/PF/dadJokes/App.css"
import StoicRow from "../@lekoarts/gatsby-theme-cara/components/stoicRow"

const years = 80

let rows = []

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}

var result = getWeekNumber(new Date());

let yearNum = (result[0] - 1984)-1
let weekNum = result[1]+1




for (let j = 1; j < (years + 1); j++) {
    let fillColour = yearNum < j ? "white" : "white"

    rows.push(
        <div key={j} style={{
            // backgroundColor: fillColour,
            // display: "inline",
            fontSize: 8,
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'

        }}><div
            style={{
                width: 8,
                // backgroundColor: fillColour,
                marginTop: 0,
                marginLeft: 5,
                marginRight: 5,
                paddingRight: 5,
                // display: "inline",
                fontSize: 7,
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
                {j}</div>
            <StoicRow j={j} weekNum={weekNum} yearNum={yearNum}></StoicRow>
        </div>
    )
}








export default function StoicCalendar() {
    return (
        
        <div>
            
            <h1 style={{textAlign: 'center'}}>It's currently week {result[1]} of {result[0]}</h1>

            <div className="Stoic"
                style={{
                    width: '100%', 
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    marginTop: 3,
                }}>
                <div>{rows}</div>


            </div>
        </div>
    );
}