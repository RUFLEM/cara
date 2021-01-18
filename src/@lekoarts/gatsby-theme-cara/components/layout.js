import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ marginBottom: "2px"}}>
        <div style={{display:"flex", justifyContent: "space-between", marginRight: "20px"}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>rupertfleming.com</h3>
        </Link>
        {/* <Link to="/technology" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Technology</h3>
        </Link> */}
        {/* <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
        </ul> */}
        </div>
      </header>
      {children}
    </div>
  )
}