import React from 'react';
import { useState } from 'react';
import CounterControl from '../CounterControls/CounterControl';
import CounterOutput from '../CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/counterActions';

const CounterHome = (props)=>{
    console.log(props,"props in counter home");
    const [counterState,setCounterState]= useState({count:0});
   const storedResults = props.storedResults.map((result)=><li onClick={()=>props.onDeleteResult(result.id)} key={result.id}>{result.val}</li>)
return(
    <div>
    <CounterOutput output={props.ctr}></CounterOutput>
    <CounterControl increment={props.onIncrement} decrement={props.onDecrement} addFive = {props.onAddFive} subtractFive={props.onSubtractFive}></CounterControl>
    <button onClick={()=>props.onStoreResult(props.ctr)}>Store</button>
    
    <ul>
        {storedResults}
    </ul>
    </div>
);
}

const mapStateToProps=(state)=>{
return{
    ctr:state.ctrReducer.counter,
    storedResults:state.resReducer.results
}

}

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrement:()=>dispatch(actionTypes.increment()),
        onDecrement:()=>dispatch(actionTypes.decrement()),
        onAddFive:()=>dispatch(actionTypes.addFive(5)),
        onSubtractFive:()=>dispatch(actionTypes.subFive(5)),
        onStoreResult:(storeVal)=>dispatch(actionTypes.storeResult(storeVal)),
        onDeleteResult:(resultID)=>dispatch(actionTypes.deleteResult(resultID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterHome);