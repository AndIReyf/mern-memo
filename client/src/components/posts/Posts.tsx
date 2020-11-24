import React from "react";
import {Post} from "./post/Post";
import useStyles from './styles'

export function Posts() {
    const classes = useStyles()

    return (
        <>
            <h1>POSTS</h1>
            <Post/>
        </>
    )
}