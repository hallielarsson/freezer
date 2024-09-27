import { configureStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from '../reducers';
const middleware = [thunk];
const store = configureStore( 
    rootReducer,
    applyMiddleware(...middleware)
)
