import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import lists, { listsSaga } from './lists';
import loading from './loading';

const rootReducer = combineReducers({
    lists,
    loading
});

export function* rootSaga() {
    yield all([listsSaga()]);
}

export default rootReducer;