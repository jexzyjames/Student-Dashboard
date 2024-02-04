import React, {useState} from 'react'
import home from "../homework.png";
import document from "../document.png";
import menu from "../menuicon.png";
import card from "../credit-card.png";
import refresh from "../refresh.png";
// import "./Home.css";
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebars';
import Aside from './Aside';
import close from "../closeicon.png";

function Data() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grids">
    
        <Header/>
        <>
        {!isOpen && (
          <img
            onClick={(e) => {
                setIsOpen(!isOpen)
            } }
            className="img"
            src={menu}
            alt=""
          />
        ) 
}
      </>
      <>
       {isOpen && (
          <img
        onClick={(e) => {
            {
                console.log(e.currentTarget);
                setIsOpen(!isOpen)
            } }
        }
                
            className="img close"
            src={close}
            alt="close"
          />
        )}
      </>
        {/* <Sidebar/> */}
        <div className={isOpen ? "sidebar open " : "sidebar "}>
      <div className='navs'>
          <ul>

            <Link  to='/dashboard'>
            <li className="live"
            onClick={(e)=>{

            }}>Dashboard</li></Link>
            <Link to='/data'>
            <li className="live"  onClick={(e)=>{
               
            } } >Student Data</li>
            </Link> 
            <Link to='/payments'><li className="live"  onClick={(e)=>{

            } }  >Payments</li></Link>
            <li className="live"  onClick={(e)=>{
                
            } } >Course Registration</li>
            <li className="live"   onClick={(e)=>{
               
            } } >Results</li>
            <li className="live"  onClick={(e)=>{
               
            } } >Appointment</li>
            <li className="live"  onClick={(e)=>{
              
            } } >Election</li>
            <li className="live"  onClick={(e)=>{
              
            } } >Accommodation</li>
            <li  className="live" onClick={(e)=>{
               
            } } >Student Applications</li>
            
            
            
          </ul>
        </div>
      </div>
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
        <h2 style={{
            color:'#97CEDF',
            marginTop: '10px'
        }}>Bio Data</h2>
      <div className="bottom">
        <div className="icons doc">
          <img src={document} alt="" />
          <h3>Update Passport</h3>
        </div>
        <div className="icons ref">
          <img src={refresh} alt="" />
          <h3>Basic Data</h3>
        </div>
        <div className="icons card">
          <img src={card} alt="" />
          <h3>Education History</h3>
        </div>
      </div>
      <div className="icons app">
        <img src={document} alt="" />
        <h3>Document Upload</h3>
      </div>
      <div className="icons app">
        <img src={home} alt="" />
        <h3>Print Admission Letter</h3>
      </div>
      <div className="icons app">
        <img src={home} alt="" />
        <h3>Print Bio Data</h3>
      </div>
    </div>
    <Aside/>
    </div>
  )
}

export default Data
