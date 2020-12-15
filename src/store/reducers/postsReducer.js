import * as postsActions from  '../actions/postActions';

const initialState = {
    posts:[]
}

const postsReducer = (state=initialState,action)=>{

    switch(action.type){
    case postsActions.SAVE_POSTS:
        return {
            ...state,
            posts:action.value
        }
    }

    return state;

}

export default postsReducer;