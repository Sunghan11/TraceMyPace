import { RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE } from '../actions/route_actions';
import {REMOVE_ERRORS} from '../actions/error_actions';

const routeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Array.from(state);
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            // newState.push(action.error)
            // return newState;
            return action.errors;
        case RECEIVE_ROUTE:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default routeErrorsReducer;