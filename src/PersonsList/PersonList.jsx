import React from 'react';
import Person from '../Person/Person'
const personList = (props)=>{
    let person = props.list.map((item)=>{
    return <Person click={()=>props.click(item.type)} nameChange={(event)=>props.nameChange(event,item.type)} name = {item.type} key={item.type}></Person>
  });
return person;
};

export default personList;