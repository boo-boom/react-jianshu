import { combineReducers } from 'redux';
import { header } from './../components/Header/reducer';
import { home } from './../views/home/reducer';

export default combineReducers({header, home});