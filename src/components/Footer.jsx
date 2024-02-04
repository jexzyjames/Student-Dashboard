import React, {useEffect, useState, useRef} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './styles/style.css'
import image from '../Homepage - Desktop 1.png'
function Footer () {
const  [toggl, setTogggl] = useState([])
const  [NewItem, setNewItem] = useState('')
  // setTogggl(NewItem)

  const addTodo = (e)=>{
  setNewItem(e.target.value)
 
  }
  const edit =(e)=>{
    console.log(e.innerHTML);
  }
  const addItem = ()=>{
    if(NewItem != ''){
      setTogggl((prevtoggl)=> [...prevtoggl, NewItem]);
      setNewItem( '')
    }
    
  }
  const  delItem = (todo)=>{
    // 
if(toggl[0]){
  setTogggl([])
}

  }
   return(
    <div className='todo'>
      <input value={NewItem} id='input' type="text"
       placeholder='input'
       onChange={addTodo} />
       <button onClick={addItem} id='btn'>Add</button>

  {
    toggl.map((NewItem, index)=>{
      return(
        <div className='container' key={index}>
           <input className='h2' type="text" value={NewItem} disabled/> 
          <button onClick={delItem}>Delete</button>
          <button onClick={(e)=>{
         var show =   setNewItem(e.target.value)
            console.log(show);

          }} >Edit</button>
           <a  href='/header'>
          <img src={image} alt="" />
          </a>
        </div>
      )
    })
  }
      
  
  
      
    </div>
   )
  
}

export default Footer
