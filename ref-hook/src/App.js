import './App.css';
import React from "react";
import {useEffect, useRef,useState} from 'react';

function App() {
  const [name, setName] = useState("")
  const rerenderCount = useRef(0)

  useEffect(() => {
    rerenderCount.current = rerenderCount.current + 1
  },[name])

  return( 
  <div className='App'>
    <input type="text" onChange={e=>setName(e.target.value)}></input>
    <h2>I rendered my name {rerenderCount.current} times</h2>
  </div>
  )
}

export default App;
