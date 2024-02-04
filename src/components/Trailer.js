import React from "react";
import logo from "../Logo.png";
import "../styles.css";
import {NavLink, Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "../App";
import image from '../Poster (1).png'
const trailer = () => {
  return (
    <div className="container">
      <div className="links">
        <div className="events">
          <span className="box">
            <Link to='/header'>
            <img className="logo" src={logo} alt="" />

            </Link>
            
            <h4>MovieBox</h4>
          </span>
          <ul>
            
            <li>Home</li>
            <li>Movie</li>
            <li>Tv Series</li>
            <li>Upcoming</li>
          </ul>
          <div className="note">
            Play movie quotes and earn free tickets.
            <p>50k people are playing now</p>
            <button className="btn">Start Playing</button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="play">
          <img src={image} alt="image"/>
        </div>
        <b>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eos vel
          id pariatur qui necessitatibus consequuntur temporibus eius, neque
          dolorum, eveniet, suscipit harum. Ab qui dignissimos officiis, minus
          ea illo!
        </b>
        <br />
        <label>
            Director:
            <h5>Joseph</h5>
        </label>
        <label>
            Director:
            <h5>Joseph</h5>
        </label>
        <label>
            Director:
            <h5>Joseph</h5>
        </label>
      </div>
    </div>
  );
};

export default trailer;
