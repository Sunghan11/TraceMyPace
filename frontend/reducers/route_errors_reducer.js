import { RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE, RECEIVE_ROUTES, RECEIVE_ROUTE_ERRORS } from '../actions/route_actions';
import {CLEAR_ERRORS} from '../actions/error_actions';
const RouteErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            return action.errors;
        case RECEIVE_ROUTES:
            return [];
        case RECEIVE_ROUTE:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default RouteErrorsReducer;