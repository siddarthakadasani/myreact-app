import React from 'react';
import classes from './CounterControl.module.css';
const CounterControl = (props)=> {

   const onIncrement = ()=>{
       console.log("icrement");
   } 

   const onDecrement = ()=>{
       console.log("decrement");
   }
   const onAddFive = ()=>{
       console.log("add 5");
   }
   const onSubFive = ()=>{
       console.log("sub 5");
   }


return (
    <div>
        <button className={classes.customButton} onClick ={props.increment}>Increment</button>
        <button className={classes.customButton} onClick ={props.decrement}>Decrement</button>
        <button className={classes.customButton} onClick ={props.addFive}>Add 5</button>
        <button className={classes.customButton} onClick ={props.subtractFive}>Subtract 5</button>
    </div>
)


}

export default CounterControl;