
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

function App() {

let [counters, setCounters ] = useState([

    {id:1, value: 4},
    {id:2, value: 0},
    {id:3, value: 0},
    {id:4, value: 0},
    
])

function handleIncrement(counter){
    console.log(counter)
    const incrementCounter = [...counters]

    const index = incrementCounter.indexOf(counter)
    incrementCounter[index] = { ...counter }
    incrementCounter[index].value++
    setCounters(incrementCounter)
} 

function handleDelete(counterID) {

    console.log(counterID)
    const newCounter = counters.filter( c => c.id !== counterID)
    setCounters(newCounter);
}

function handleReset() {
    const resetCounter = counters.map(c => {
        c.value = 0;
        return c;
    })
    setCounters(resetCounter)
}

  return (
     <React.Fragment>
       <NavBar totalCounter={counters.filter(c=>c.value>0).length}/>

       <main className='container'>
          <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          
          />
       </main>
     </React.Fragment>
  );
}

export default App;
