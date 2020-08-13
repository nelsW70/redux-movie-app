import { createStore, combineReducers } from 'redux';
import movielistReducer from './reducers/movielistReducer';

const reducer = combineReducers({ movies: movielistReducer });

const initialState = {
  movie: { name: 'TERMINATOR 2' }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
