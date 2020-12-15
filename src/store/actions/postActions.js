import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const SAVE_POSTS = 'SAVE_POSTS';


export const fetchPosts = () =>{
    return dispatch  =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response);
           let data = response.data.slice(0,10);
           dispatch(savePosts(data))
        })
    }

}

export const savePosts = (response)=>{
return {
    type: SAVE_POSTS,
    value:response
}
}