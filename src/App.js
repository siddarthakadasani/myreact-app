import React,{useState} from 'react';
import './App.css';
import PersonList from './PersonsList/PersonList';
import Posts from './Posts/Posts';
import {BrowserRouter, Link, Redirect, Switch, withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import DetailedPost from './Posts/DetailedPost/DetailedPost';
import CounterHome from './Counter/CounterHome/CounterHome';


function App(props) {
 console.log(props,"in app js");
  let [persons,personsSetState] = useState({person:[{type:"Good"},{type:"Psyc"},{type:"Short Temper"}]});
  let [showPersons,showPersonsSetState]=useState({showPersons:false});
  let [counter,setCounter] = useState({
    count:0
});

  const deleteNameHandler = (name)=>{
    console.log(name)
    let personsArr = [...persons.person];
    let newPersonsArr = personsArr.filter((item)=> item.type !== name);
    personsSetState({person:newPersonsArr})
  }
  const togglePersons = (props)=>{
    // showPersonsSetState({showPersons:!showPersons.showPersons});
    console.log(props,"in toggle peron")
    props.history.push('/redux')
  }
  
  // let person = <PersonList list = {persons.person} click={(name) => deleteNameHandler(name)}  nameChange={(event,name) => nameChangeHandler(event,name)} ></PersonList>
  // let showContent = showPersons.showPersons ? person:null;
  return (
    <BrowserRouter>
    <div className="App">
     <h1>Hi, I am react app</h1>
     <Link className="customBtn" to="/">Home</Link>
     <Link className="customBtn" to="/redux">Redux</Link>
     
     <Switch>
     <Route path="/" exact component={Posts}></Route>
     <Route path="/redux" component={CounterHome}></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
