import React from "react";
// import "./Home.css";
import menu from "../menuicon.png";
import { useState, useEffect } from "react";
import close from "../closeicon.png";
import { Link } from "react-router-dom";

function Sidebars() {
  const [isOpen, setIsOpen] = useState(false);
  const objects =[
    'Dashboard',
    'Student Data',
    'Payments',
    'Election',
    'Appointment',
    'Results',
    'Course Registration',
    'Accommodation',
    'Student Applications'
  ]
  const[lists, setLists]=useState(objects)
 
  
  function check(){
    let lis = document.querySelectorAll('.live');

    lis.forEach((li)=>{
        li.addEventListener('click', (e)=>{
            if(e.target.innerHTML == li.innerHTML){
                e.target.classList.add('hover')
              console.log(e.target.innerHTML);
            }
            if(e.target.classList.contains('hover')){
                e.target.classList.remove('hover')

            }
        })
    })

    
}
check()
  
  return (
    <div className="grds">
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
     </div>
  );
}

export default Sidebars;
