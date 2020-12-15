import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Post from './Post/Post';
import DetailedPost from '../Posts/DetailedPost/DetailedPost';
import {connect} from 'react-redux';
import * as postActions from '../store/actions/postActions';
const Posts =(props)=>{
    console.log(props,"props in posts");
  
    useEffect(()=>{
      props.getPosts();
    console.log(props,"in posts");
    },[])

   
   const onPostClick = (post)=>{
        console.log(post);
        props.history.push(props.match.url+'post/'+post.id)

    }
    let post = props.posts.map((post)=> <Post title={post.title} key={post.id} body={post.body} click={()=> onPostClick(post)}></Post>);
    
    return(
        <div>
            {post}
            <Route path={props.match.url+"post/:id"} exact component={DetailedPost}></Route>
        </div>
    )
    
}

const mapStateToProps =  (state)=>{
return {
    posts:state.postReducer.posts
}
}

const mapDispatchToProps = (dispatch)=>{
return {
    getPosts:()=> dispatch(postActions.fetchPosts())
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts);