import React, { useEffect, useState } from "react";
// import React from "react";

export default function Tiingo () {

    const [starsCount, setStarsCount] = useState(0)
    useEffect(() => {
      // get data from GitHub api
      fetch(`https://api.tiingo.com/tiingo/daily/aapl/prices?&token=5dc85e7a5208f0b818868eb36e47882d9d255e62`, {
  mode: 'cors' // 'cors' by default
})
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setStarsCount(resultData[0].close)
        }) // set data for the number of stars
    }, [])
    return (
      <section>
        <p>apple closing price {starsCount}</p>
      </section>
    )
  }




