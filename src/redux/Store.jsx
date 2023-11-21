import { applyMiddleware, compose, createStore } from "redux";
import ReducerTodo from "./ReducerTodo";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(ReducerTodo, composeEnhancers(applyMiddleware()))

export default store