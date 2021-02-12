import React, { useState, useEffect, useRef} from 'react';










const DataFetch = (props) => {

    const [data, setData] = useState([])
    const dataRef = useRef(data)


    let arr = []
    


    useEffect(() => {

        var i = 0;                  //  set your counter to 1

        function myLoop() {         //  create a loop function


            let ticker = ['IBM','GOOG', 'TSLA', 'MSFT' ]
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=`+ticker[i]+`&apikey=AUCPZWTAXZ9HB6EE`)
          .then(response => response.ok && response.json()) // parse JSON from request
          .then(resultData => {
            setData(count => {
              if (data.length === null){
                  // console.log("empty")
              }
              else {
              dataRef.current = resultData["Weekly Time Series"]
              // console.log("reffing")
              // console.log(dataRef)
    
              let names = (Object.keys(dataRef.current))
              // console.log("names")
              // console.log(names)  // all the dates in []
    
    
              let values = Object.values(dataRef.current)

          
        
              let data3 = values
              let i = 0

            //   console.log("data3 values = ", data3)

              
              data3.forEach( d => {
                  d.name = names[i]
                  i+=1
                  d["Px"] = +d["4. close"]
              })

              let tickers = ['IBM','GOOG', 'TSLA', 'MSFT' ]

             let ob = {}

             ob[tickers[i]] = data3

             arr.push(ob)



              console.log("array")

              console.log(arr)

              
              // console.log("data3")
              // console.log(data3)

          
    
              return count}
          })
          }) // set data for the number of stars
          // .then(munge())
          .catch(console.error)


            
          setTimeout(function() {   //  call a 3s setTimeout when the loop is called
            console.log('hello', i);   //  your code here
            i++;                    //  increment the counter
            if (i < 4) {           //  if the counter < 10, call the loop function
              myLoop();             //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
          }, 3000)
        }
        
        myLoop();                   //  start the loop


      }
      
      
      , [])

  
  





    return (
        <>


                <div>data fetch</div>

        </>
    );
};




export default DataFetch;
