import { RECEIVE_WORKOUT_ERRORS, RECEIVE_WORKOUT } from '../actions/route_actions';
import { REMOVE_ERRORS } from '../actions/error_actions';

const workoutErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Array.from(state);
    switch (action.type) {
        case RECEIVE_WORKOUT_ERRORS:
            // newState.push(action.error)
            // return newState;
            return action.errors;
        case RECEIVE_WORKOUT:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default workoutErrorsReducer;