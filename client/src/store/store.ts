import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import posts from "../reducers/posts";

const reducers = combineReducers({
    posts,
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootReducer = ReturnType<typeof reducers>
