import React, { useEffect, useState } from 'react';
import classes from './DetailedPost.module.css';
import axios from 'axios';
const DetailedPost =(props)=>{
    const [postDetails,postDetailsSetState]= useState({
        post:{}
    })
 
    useEffect(()=>{
     console.log(props);
     axios.get('https://jsonplaceholder.typicode.com/posts/'+props.match.params.id).then((response)=>{
         console.log(response,"individual post");
         postDetailsSetState({
             post:response.data
         })
     })
    },[props.match.params.id])

    return (
        <div>
          <h1 className={classes.title}>{postDetails.post.title}</h1>
          <p>{postDetails.post.body}</p>  
        </div>
    )
}

export default DetailedPost;