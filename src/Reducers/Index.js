import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikDogrulamaReducers';
import StudentsCreateReducers from './StudentsCreateReducers';
import StudentsDataReducers from './StudentsDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
    kimlikDogrulamaResponse: KimlikDogrulamaReducers,
    studentsListResponse: StudentsCreateReducers,
    studentDataResponse: StudentsDataReducers,
    studentUpdateResponse: StudentUpdateReducers
});