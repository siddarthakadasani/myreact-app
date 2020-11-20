import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Post from './Post/Post';
import DetailedPost from '../Posts/DetailedPost/DetailedPost';
import axios from 'axios';
const Posts =(props)=>{
    console.log(props,"props in posts");
    const [posts,postSetState] = useState({
        posts:[]
    });
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response);
           let data = response.data.slice(0,10);
          postSetState({
              posts:data
          })
        })
    console.log(props,"in posts");
    },[])

   
   const onPostClick = (post)=>{
        console.log(post);
        props.history.push(props.match.url+'post/'+post.id)

    }
    let post = posts.posts.map((post)=> <Post title={post.title} key={post.id} body={post.body} click={()=> onPostClick(post)}></Post>);
    
    return(
        <div>
            {post}
            <Route path={props.match.url+"post/:id"} exact component={DetailedPost}></Route>
        </div>
    )
    
}
export default Posts;