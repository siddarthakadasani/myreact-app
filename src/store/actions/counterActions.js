export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_5 = 'ADD_5';
export const SUB_5 = 'SUB_5';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment =()=>{
    return{
        type:INCREMENT
    }
}
export const decrement =()=>{
    return{
        type:DECREMENT
    }
}
export const addFive =(value)=>{
    return{
        type:ADD_5,
        value:value
    }
}
export const subFive =(value)=>{
    return{
        type:SUB_5,
        value:value
    }
}
export const storeResult =(value)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(saveResult(value));
        },2000)
       
    }
 
}
export const saveResult =(res)=>{
    return{
        type:STORE_RESULT,
        resVal:res
    }
}
export const deleteResult =(value)=>{
    return{
        type:DELETE_RESULT,
        resultId:value
    }
}


