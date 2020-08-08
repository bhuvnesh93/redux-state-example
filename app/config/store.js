import { createStore } from 'redux';
import reducer from '../state/reducer';

const configureStore = () => createStore(reducer);

const store = configureStore();

export default store;
