import {RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE} from '../actions/route_actions'
import RouteShow from '../components/route/route_show';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            newState = Object.assign({}, state);
            newState[action.route.id] = action.route;
            return newState;
        case REMOVE_ROUTE:
            newState = Object.assign({}, state);
            delete newState[action.routeId];
            return newState
        default:
            return state;
    }
};

export default routesReducer;