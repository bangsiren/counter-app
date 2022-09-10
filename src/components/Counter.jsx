import React, { useState }  from "react";

export default function Counter(props) {
    // console.log(props)
    // let [count, setCount] = useState(props.counter.value);
    
    // function handleIncrement() {
    //    setCount(count+1);
    // }
    
  function formtCount() {
     const { value } = props.counter
     return value==0 ? "Zero" : props.counter.value
  }
  function getBackgroundColor() {
     let classes = "p-2 badge m-2 bg-";
     classes += props.counter.value == 0 ? "warning" : "success";
     return classes;
  }

  return (
     <React.Fragment>
         <p>Counter: #{props.id}</p>
         <span className={getBackgroundColor()}>{formtCount()}</span>
         <button className='btn btn-secondary btn-sm' onClick={()=> props.onIncrement(props.counter)}>Increment</button>
         <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
         <br />
     </React.Fragment>
  )
}