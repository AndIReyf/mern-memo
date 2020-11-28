import {PostsType, PostType} from "../reducers/posts";

const FETCH_POSTS = 'FETCH_POSTS'
const CREATE_POST = 'CREATE_POST'
const UPDATE_POST = 'UPDATE_POST'

export const action = {
    fetchPosts: (posts: PostsType) => ({type: FETCH_POSTS, posts} as const),
    createPost: (post: PostType) => ({type: CREATE_POST, post} as const),
    updatePost: (updatedPost: PostType) => ({type: UPDATE_POST, updatedPost} as const),
}

export type ActionType = ReturnType<typeof action.fetchPosts>
    | ReturnType<typeof action.createPost>
    | ReturnType<typeof action.updatePost>
