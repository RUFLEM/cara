import React from "react";
import './cards.css';


export default function Cards(props) {
    let title = props.title
    let link = props.link
  return (
 <div >
     <a className='Cards' href= {link}>{title}</a>


    </div>
  );
}