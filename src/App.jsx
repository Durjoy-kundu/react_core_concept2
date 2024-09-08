import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './Friends'

import './App.css'




function App() {
  function handelClick(){
    alert('button clicked');
  }
  const handelClick2 = () =>{
    alert('button 2 clicked');
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h2>Core concept 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handelClick}>Click me</button>

      <button onClick={handelClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>click3</button>

      <button onClick={() => addToFive(3)}>button4</button>
      <button onClick={()=>{alert('button5 is clicked')}}>button5</button>


      <button onClick={() => {alert('button is clicked !')}}>NOMOre please</button>
    </>
  )
}

export default App
