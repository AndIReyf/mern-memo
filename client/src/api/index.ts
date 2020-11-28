import axios from 'axios'
import {PostsType, PostType} from "../reducers/posts";

export const api = {
    fetchPosts() {
        return axios.get<PostsType>('/posts/')
    },
    createPost(newPost: NewPostType) {
        return axios.post<PostType>('/posts/', newPost)
    },
    updatePost(id: string, updatedPost: NewPostType) {
        return axios.patch<PostType>(`/posts/${id}`, updatedPost)
    }
}

export type NewPostType = {
    title: string
    creator: string
    message: string
    tags: string[]
    selectedFile: string
}
