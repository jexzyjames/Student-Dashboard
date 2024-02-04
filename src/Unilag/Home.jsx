import React, { useState, useEffect } from "react";
import menu from "../menuicon.png";
import close from "../closeicon.png";
import "./Home.css";
import Header from "./Header";
import Sidebar from "./Sidebars";
import Body from "./Body";
import Aside from "./Aside";
import { Link } from "react-router-dom";
function Home() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
//   var aside = <Aside/>

  // const objects =[
  //   'Dashboard',
  //   'Student Data',
  //   'Payments',
  //   'Election',
  //   'Appointment',
  //   'Results',
  //   'Course Registration',
  //   'Accommodation',
  //   'Student Applications'
  // ]
  // const[lists, setLists]=useState(objects)
 
//    return aside
  return (
    <div className="grids">
     
      <Header />
      {/* <Sidebar/> */}
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
      {/* <div className={isOpen ? 'sidebar open' : ' sidebar' }>
        <div className="navs">
            <ul>
            {objects.map((item, index)=>{
                return(
                    <Link to='/payments'>
                      <li
                      className={index ===lists ? 'hover' : 'null'}
                     onClick={(e)=>{

                      if(item == e.currentTarget.innerText){
                        window.onload = (e)=>{
                        
                            e.currentTarget.classList.add('hover')

                        }
                         console.log(e.currentTarget.innerText);
                        // setLists(index)

                      }
                    if(item !== e.currentTarget.innerText){
                        alert('not equal')

                    }
                     }}
                       key={index}>{item}</li>
              </Link>

                )

              })}
              </ul>
              </div>
           </div> */}
      
      <div className={isOpen ? "sidebar open" : "sidebar"}>
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
      <Body />
      <Aside/>
      

      {/* {objects.map((item, index)=>{
        return(
          <div className="side">
            <div>
              <h2
              className={index === lists ? 'hover' : null}
             onClick={(e)=>{
               setLists(index)
              
             }}
               key={index}>{item}</h2>
            </div>
          </div>
        )
      })} */}
    </div>
  );
}

export default Home;
