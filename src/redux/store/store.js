import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [thunk];
const store = configureStore({
    reducer: rootReducer(),
    middleware: middlewares
})

export default store;
