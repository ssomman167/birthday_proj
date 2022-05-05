
import { useState } from 'react'
import data from './data'
import styled from 'styled-components'
import "./App.css"
import Birth from './Birth'
function App() {
 const [arr,setArr]=useState(data)
  const clearit=()=>{
   setArr([])
  }

  return (
   
    <>
    <h1 style={{textAlign:'center',color:'blueviolet'}}>{arr.length} birthdays are there today</h1>
    <Birth data={arr}/>
    <div style={{textAlign:'center',color:'blueviolet',fontWeight:'bolder',padding:'10px'}} onClick={clearit}>CLEAR ALL</div>
    </>
  )
}



export default App