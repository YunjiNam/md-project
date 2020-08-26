import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import lists, { listsSaga } from './lists';

const rootReducer = combineReducers({
    lists,
});

export function* rootSaga() {
    yield all([listsSaga()]);
}

export default rootReducer;