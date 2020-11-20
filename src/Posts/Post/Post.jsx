import React from 'react';
import classes from './Post.module.css';
const Post =(props)=>(
    <div className={classes.postDiv} onClick={props.click}>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
)

export default Post;