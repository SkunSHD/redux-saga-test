import { combineReducers } from 'redux'

const defaultState = [];

const books = (state = defaultState, action) => {
    switch (action.type) {
        case 'POSTS_SUCCESS':
            return [
                ...state,
                ...action.payload
            ]
        case 'FETCH_BOOKS_SUCCEEDED':
             return [
                 ...state,
                 ...action.books
             ]

        default:
            return state
    }
}

const rootReducer = combineReducers({
    books
})

export default rootReducer
