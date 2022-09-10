import React, { useState } from "react";
import Counter from "./Counter";
export default function Counters() {

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
        <div>
            <button onClick={handleReset} className="btn btn-primary btn-sm m-2">reset</button>
           {counters.map(counter=> <Counter  
           onIncrement = {handleIncrement}
           onDelete={handleDelete} key={counter.id}
            counter = {counter} id={counter.id}
            />)}
        </div>
    )
}