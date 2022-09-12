import React from "react";
import Counter from "./Counter";
export default function Counters({ counters, onIncrement, onReset, onDelete }) {

    return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
           { counters.map(counter=> <Counter  
             onIncrement = {onIncrement}
             onDelete={onDelete} key={counter.id}
             counter = {counter} id={counter.id}
            />)}
        </div>
    )
}