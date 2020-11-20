import React from 'react';
import classes from './Person.module.css';
const person = (props)=>{
return(
<React.Fragment>
   
<h1 onClick={props.click}>I'm a {props.name} Person.{props.children}</h1>
<input className={classes.customBtn} type="text" onChange={props.nameChange} value={props.name}></input>
</React.Fragment>
) 
}

export default person;