import { createStore, applyMiddleware } from "redux";
import pharmacy from '../reducers/pharmacy';
import thunk from 'redux-thunk';

export default () => {
    return createStore(pharmacy, applyMiddleware(thunk));
};