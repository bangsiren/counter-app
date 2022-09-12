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
         {/* <p>Counter: #{props.id}</p> */}
        <div className="row">
          <div className="col-1">
          <span className={getBackgroundColor()}>{formtCount()}</span>
          </div>
          <div className="col-2">
          <div className="row">
         <button className='btn m-1 btn-secondary btn-sm col' onClick={()=> props.onIncrement(props.counter)}>+</button>
         <button disabled = {props.counter.value === 0? "disabled" : ""} className='btn m-1 btn-secondary btn-sm col' onClick={()=> props.onDecrement(props.counter)}>-</button>
         <button  className="btn m-1 btn-danger btn-sm col" onClick={() => props.onDelete(props.counter.id)} >x</button>
          </div>
          </div>
        </div>
         
     </React.Fragment>
  )
}