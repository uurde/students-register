import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikDogrulamaReducers';
import StudentsListReducers from './StudentsListReducers';

export default combineReducers({
    kimlikDogrulamaResponse: KimlikDogrulamaReducers,
    studentsListResponse: StudentsListReducers
});