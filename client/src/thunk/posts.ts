import {Dispatch} from "redux";
import {api, NewPostType} from "../api";
import {action} from "../actions/posts";

export const fetchPosts = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.fetchPosts()

        dispatch(action.fetchPosts(data))

    } catch (e) {
        console.log(e)
    }
}

export const createPost = (newPost: NewPostType) => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.createPost(newPost)

        dispatch(action.createPost(data))

    } catch (e) {
        console.log(e)
    }
}

export const updatePost = (id: string, updatedPost: NewPostType) => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.updatePost(id, updatedPost)

        dispatch(action.updatePost(data))

    } catch (e) {
        console.log(e)
    }
}