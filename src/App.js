// import Trailer from '../src/components/Trailer'
import Header from '../src/components/Header'
import Footer from './components/Footer';
import Body from '../src/components/Body'
import React from "react";
import logo from "./Logo.png";
import menu from "./Menu.png";
import imdb from "./Heart.png";
import watch from "./Icon.png";
import { useState, useRef, useEffect } from "react";
import {NavLink, BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Trailer from "./components/Trailer";
import Routers from './Router/Router'
import Router from './Router/Router';
import image from './Homepage - Desktop.png'
import Display from './components/Display';
function App() {
  // const [isOpen, setOpen] = useState(true);
  // function Go(){
  // return <Header/>
  // }
  return (
    <div className="App"    >
      <div>
        {/* <Router/> */}
        {/* <Header>
        <BrowserRouter>
        <Trailer/>
        <Body/>
        <Header/>
        <Footer/>
        </BrowserRouter>
          </Header> */}
      </div>
        {/* <Header> */}
        <BrowserRouter>
     <Routes>
       <Route path="/footer" exact element={<Footer/>}/>
       <Route path="/header"exact element={<Header/>}/>
       <Route path="/body" exact element={<Body/>}/>
       <Route path="/trailer" exact element={<Trailer/>}/>
       </Routes>

       </BrowserRouter>
       {/* </Header> */}
        

    </div>
  );
}

export default App;
