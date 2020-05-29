import { RECEIVE_LOCATION_ERRORS, RECEIVE_LOCATION, RECEIVE_LOCATIONS, REMOVE_LOCATION } from '../actions/location_actions';
import { REMOVE_ERRORS } from '../actions/error_actions';
const locationErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LOCATION_ERRORS:
            return action.errors;
        case RECEIVE_LOCATIONS:
            return [];
        case RECEIVE_LOCATION:
            return [];
        case REMOVE_LOCATION:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default locationErrorsReducer;