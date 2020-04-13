import {RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE} from '../actions/route_action'

const routesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            return Object.assign({}, state, {[action.route.id]: action.route});
        default:
            returnstate;
    }
};

export default routesReducer;