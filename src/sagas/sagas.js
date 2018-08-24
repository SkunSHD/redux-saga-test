import { call, put, takeEvery } from 'redux-saga/effects'
import API from '../API'


/*
  Starts fetchBooks on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("FETCH_BOOKS_REQUESTED", fetchBooks);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBooks(action) {
    try {
        const books = yield call(API.fetchBooks);
        yield put({type: "FETCH_BOOKS_SUCCEEDED", books});
    } catch (e) {
        yield put({type: "FETCH_BOOKS_FAILED", message: e.message});
    }
}


export default mySaga;