import React from "react";
import {Post} from "./post/Post";
import useStyles from './styles'
import {useSelector} from "react-redux";
import {RootReducer} from "../../store/store";

const selectPosts = (state: RootReducer) => state.posts

export function Posts() {
    const classes = useStyles()
    const posts = useSelector(selectPosts)

    return (
        <>
            <h1>POSTS</h1>
            <Post/>
        </>
    )
}