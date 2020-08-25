import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

const GET_LIST = 'lists/GET_LIST';
const GET_LIST_SUCCESS = 'lists/GET_LIST_SUCCESS';

export const getList = createAction(GET_LIST, id => id);


const getListSaga = createRequestSaga(GET_LIST, api.getList);

export function* listsSaga() {
    yield takeLatest(GET_LIST, getListSaga);
}

const initialState = {
    post: null
};

const lists = handleActions(
    {
        [GET_LIST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload.data
        })
    },
    initialState
);

export default lists;