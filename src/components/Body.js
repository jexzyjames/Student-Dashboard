import React from 'react'
import { useNavigate } from 'react-router-dom'
import strange from '../Poster (1).png'
import man from '../Poster (2).png'
import shang from '../Poster (3).png'
import dunkie from '../Poster Image (1).png'
import breath from '../Poster (2).png'
import '../styles.css'
import { useState, useRef, useEffect } from "react";
import {BrowserRouter,Link, Routes, Route,  NavLink} from 'react-router-dom';
import Trailer from "./Trailer";
import Routers from '../Router/Router'
import header from './Header'

function body (){
    // const navigate = useNavigate();

    
  return (
    <div className='movie'>
         {/* <h3>Featured Movie</h3>
      <div className="moviegrid">
      {/* <div className="above">
        <h3>Featured Movie</h3>
      </div> */}
      
        <div className="grid">
            <a href='/trailer'>
            <img src={strange} alt="" />

            </a>

           
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img  src={shang} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
           
        <img src={shang} alt="" />

            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>

            </div>
            
            
        </div>

        <div className="grid">
            <img src={man} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img src={strange} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img src={breath} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img src={strange} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img src={strange} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>

        <div className="grid">
            <img src={strange} alt="" />
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>
        <div className="grid">
            <img src={strange} alt="" />

            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
            
            
        </div>
        <div className="grid">
            <a href='/footer' to='/footer' >  
            footer 
            <img src={man} alt="" />
           </a>
            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
                <h4>Action, Adventure, Horror</h4>
            </div>
           
            
        </div>
        <div className="grid">
       
            {/* <BrowserRouter> */}
            <a href ='/trailer' >
           <img src={shang} alt="spiderman" />

            </a>
            {/* <Routes> */}
                {/* <Route exact path='/trailer' Component={Trailer}/> */}
            {/* </Routes> */}
           
            {/* </BrowserRouter> */}
           
         
           
           
        
            <link rel="import" href="Trailer.jsx" />
        

            <div className="details">
                <p className='time'>USA 2016 - Current</p>
                <h3>Stranger Things</h3>
                <div></div>
            <h4>Action, Adventure, Horror</h4>

            </div> 
            
            
        </div>
       
      </div>

  )
}

export default body
