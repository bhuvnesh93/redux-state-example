import { combineReducers } from 'redux';

import todos from './Todos';
import placeReducer from './placeReducer';

export default combineReducers({ todos, placeReducer });
