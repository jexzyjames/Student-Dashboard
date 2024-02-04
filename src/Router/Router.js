import { useState, useRef, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Trailer from "../components/Trailer";
import Footer from "../components/Footer";
import App from "../App";
import Header from "../components/Header";
import Body from '../components/Body'
import Home from '../Unilag/Home'
import Data from "../Unilag/Data";
import Payments from "../Unilag/Payments";


function Router (){
    return(
      <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="/footer" exact element={<Footer/>}/>
       <Route path="/header" exact element={<Header/>}/>
       <Route path="/body" element={<Body/>}/>
       <Route path="/election" element={<Trailer/>}/>
       <Route path="/accommodation" element={<Trailer/>}/>
       <Route path="/payments" element={<Payments/>}/>
       <Route path="/application" element={<Trailer/>}/>
       <Route path="/data" element={<Data/>}/>
       <Route path="/courses" element={<Trailer/>}/>
       <Route path="/results" element={<Trailer/>}/>
       <Route path="/appointment" element={<Trailer/>}/>
       <Route path="/dashboard" element={<Home/>}/>
       <Route path="/trailer" element={<Trailer/>}/>
       </Routes>
       </BrowserRouter>
    )
}
export default Router