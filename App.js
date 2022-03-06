import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App=()=>{
  const [CURR,UPDATE]=useState(0)
  const inCr=()=>{
UPDATE(CURR+1)
 }
 
  const DeC=()=>{
    if(CURR>0){
    UPDATE(CURR-1)
  }else{
    UPDATE(0);
    alert('limit exceed')
  }
  }
  return(
    <>
      <div className='main_div' >
      <div className='center_div'>
      <p>counter App</p>
      <h1> {CURR} </h1>
      <div className='btn_div'>
        <button onClick={inCr}>Increment</button>
        <button onClick={DeC}>Decrement</button>
      </div>
      </div>
       </div>
    </>
  )
}
export default App