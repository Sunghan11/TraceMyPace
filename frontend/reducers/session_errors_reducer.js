import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
            if(action.errors) return action.errors;
            return null;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            const newState = [];
            return newState;
        default:
            return state;
    }
}
        

export default sessionErrorsReducer;