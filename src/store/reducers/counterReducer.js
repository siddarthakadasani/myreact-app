import * as actionTypes from '../actions/counterActions';
const initialState = {
    counter:0
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
           
        return {
            ...state,
            counter:state.counter+1
        }
        case actionTypes.DECREMENT:
           
            return {
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD_5:
          
            return {
                ...state,
                counter:state.counter + action.value
            }
        case actionTypes.SUB_5:
           
        return {
            ...state,
            counter:state.counter -  action.value
        }
    }
  
    return state;
}

export default reducer;