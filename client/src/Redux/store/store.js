
import { createStore, applyMiddleware } from "redux";
import formReducers from "../reducers/formReducers";
import userReducer from "../reducers/userReducer";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {}

export const store = createStore(    
    userReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger, thunk))
    
    );