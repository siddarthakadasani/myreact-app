import * as actionTypes from '../actions/counterActions';

const initialState = {
    results:[]
}

const resultReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                counter:state.counter,
                // results:[]
                 results:state.results.concat({id:new Date(),val:action.resVal})
            }
        case actionTypes.DELETE_RESULT:
            console.log(action.id)
           let updatedArray = state.results.filter((item)=> item.id != action.resultId);
           return{
               ...state,
               results:updatedArray
           }
    }
  
    return state;
}

export default resultReducer;