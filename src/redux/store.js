import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
const store = createStore(rootReducer, applyMiddleware(thunk));
export const rrfProps = {
  dispatch: store.dispatch,
};

export default store;
