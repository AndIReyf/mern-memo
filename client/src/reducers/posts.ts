import {ActionType} from "../actions/posts";

const initState: PostsType = []

const postReducer = (state: PostsType = initState, action: ActionType): PostsType => {
    switch (action.type) {
        case "FETCH_POSTS": {
            return action.posts
        }
        case "CREATE_POST": {
            return [...state, action.post]
        }
        default:
            return state
    }
}

// Types
export type PostsType = Array<PostType>

export type PostType = {
    title: string
    message: string
    creator: string
    tags: string[]
    selectedFile: string
    likeCount: number
    createAt: string
}

export default postReducer
