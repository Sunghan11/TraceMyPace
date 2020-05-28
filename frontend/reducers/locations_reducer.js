import {RECEIVE_LOCATION, RECEIVE_LOCATIONS, REMOVE_LOCATION } from '../actions/location_actions';

const locationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            return action.locations;
        case RECEIVE_LOCATION:
            newState = Object.assign({}, state);
            newState[action.location.id] = action.location;
            return newState;
        case REMOVE_LOCATION:
            newState = Object.assign({}, state);
            delete newState[action.locationId];
            return newState
        default:
            return state;
    }
};

export default locationsReducer;