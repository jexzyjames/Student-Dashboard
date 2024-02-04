import React from "react";
import logo from "../Logo.png";
import menu from "../Menu.png";
import imdb from "../Heart.png";
import watch from "../Icon.png";
import '../styles.css'
import { useState, useRef, useEffect } from "react";
import {NavLink, Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Body from "../components/Body";
function header ()  {
  return (
    <div className="App">
      {/* <Trailer/> */}

      <div className="header">
        <div className="top">
          <div className="logo">
            <a href='/header'>
            <img src={logo} alt="" />

            </a>
        {/* <h2>MovieBox</h2> */}
      </div>
     
      <input placeholder="What do you want to watch" type="search" id="search" />
      <div className="login">
        {/* <span>Sign In</span> */}
        <img className="menu" src={menu} alt="" />
      </div>
      </div>
      <div className="info">
        <h1>
            John Wick 3 :
            {/* <br /> */}
        </h1>
        <h1>Parabellum</h1>
        {/* <div className="icons">
            <img src={imdb} alt="" />
            <img src={imdb} alt="" />
            <img src={imdb} alt="" />
        </div> */}
        <br />
        <p className="wick">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat
          rerum ut reprehenderit iste qui aperiam! Nobis, doloremque quidem
          doloribus, nihil voluptas officia omnis, alias porro minus repudiandae
          temporibus aliquam!
        </p>
<div className="btn">

            <a href='/trailer'>
          <img className="" src={watch} alt="" />
         &nbsp; WATCH TRAILER
            </a>
</div>
        {/* </button> */}
      </div>
    </div>
    <Body/>
    </div>
  // 
  );
};

export default header;
