import {PostsType, PostType} from "../reducers/posts";

const FETCH_POSTS = 'FETCH_POSTS'
const CREATE_POST = 'CREATE_POST'

export const action = {
    fetchPosts: (posts: PostsType) => ({type: FETCH_POSTS, posts} as const),
    createPost: (post: PostType) => ({type: CREATE_POST, post} as const),
}

export type ActionType = ReturnType<typeof action.fetchPosts>
    | ReturnType<typeof action.createPost>
