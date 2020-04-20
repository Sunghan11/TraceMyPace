import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
            // debugger;
            if(action.errors) {
                return action.errors;
            }    else {
                return null;
            }
            // // return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            // const newState = [];
            // return newState;
            return [];
        default:
            return state;
    }
}
        

export default sessionErrorsReducer;