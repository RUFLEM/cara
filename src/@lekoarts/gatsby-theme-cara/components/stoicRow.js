import React from "react";

const nCols = 52
const nRows = 80




export default function StoicRow(props) {

    let weekNum = props.weekNum
    let yearNum = props.yearNum


let items =[]
    for (let i = 1; i < (nCols + 1); i++) {

let filler 
  
        if(props.j<yearNum){
           filler = "blue"
        }
        else if(props.j==yearNum && i<weekNum){
            filler ="blue"
        }
        else {
            filler= "white"
        }
    

    items.push(
        <div
            key={i}
            style={{
                width: '12px',
                height: '8px',
                // backgroundColor: "white", 
                
                backgroundColor: filler, 
                color: "green",
                display: "inline-block",
                flex: 1,
                flexDirection: "row",
                alignItems: 'center',
                margin: "1px"
            }}
        > 
        </div>
    )
}


    return (
        <>
        {items}
        </>
    )
  }




