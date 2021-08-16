import { FETCHED_BOOKS } from "../actions/actionTypes";

const initialState = {books:[]}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_BOOKS: 
            return {...state, books: action.payload}
        default :
            return state
    }
}

export default booksReducer;