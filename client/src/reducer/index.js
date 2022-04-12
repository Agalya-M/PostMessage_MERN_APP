import { combineReducers } from "redux";
import { postMessage } from "./postMessage";
import { updatereducer } from "./updatereducer";

export const reducers=combineReducers({
    postMessage,updatereducer
})

