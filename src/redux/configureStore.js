import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocketsReducer';
import missionsReducer from './missions/missionsReducer';
import dragonsReducer from './dragons/dragonsReducer';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
  dragonsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
