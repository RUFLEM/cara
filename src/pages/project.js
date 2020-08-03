import React from "react"
import Footer from "../@lekoarts/gatsby-theme-cara/components/footer"
import Header from "../@lekoarts/gatsby-theme-cara/components/header"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Tiingo from "../@lekoarts/gatsby-theme-cara/components/tiingo";


export default function Project() {
  return (
    <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header></Header>
      <h1>Stock data</h1>
      <Tiingo></Tiingo>
      <p></p>
      <Footer></Footer>
    </div>
    </Layout>
  );
}