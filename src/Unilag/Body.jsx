import React, {useState, useRef} from "react";
import home from "../homework.png";
import document from "../document.png";
import card from "../credit-card.png";
import refresh from "../refresh.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Body() {
 const open = useRef()
 const tweak = event =>{
  const el = document
 }
  return (
    <div className="main">
      <div className="Top">
        <div className="Cards">
          <div className="names">
            <h1>James Jegede</h1>
            <br />
            <h4>Bachelor of Education in Chemistry</h4>
            <h5>SCIENCE EDUCATION</h5>
          </div>
          <div className="Courses">
            <div className="Lists">
              <h4>4</h4>
              <h4>Year</h4>
            </div>
            <div className="Lists">
              <h4>First</h4>
              <h4>Semestser</h4>
            </div>
            <div className="Lists">
              <h4>10</h4>
              <h4>Courses</h4>
            </div>
            <div className="Lists">
              <h4>13</h4>
              <h4>Units</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons doc">
          <img src={document} alt="" />
          <h3>Courses</h3>
          <h4>122/128 Completed</h4>
        </div>
        <div className="icons ref">
          <img src={refresh} alt="" />
          <h3>Refresh Payment Status</h3>
        </div>
        <div className="icons card">
          <img src={card} alt="" />
          <Link  to='/payments'>
            Payments
            </Link>
            <h3 onClick={()=> tweak()}style={{color: 'green', cursor: "pointer"}} ref={open}>Payments</h3>

        </div>
      </div>
      <div className="icons app">
        <img src={home} alt="" />
        <h3>Applications</h3>
      </div>
    </div>
    // </div>
  );
}

export default Body;
