import { RECEIVE_STATUSES, RECEIVE_STATUS, REMOVE_STATUS } from '../actions/status_actions';

const StatusesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_STATUSES:
            return action.statuses;
        case RECEIVE_STATUS:
            newState = Object.assign({}, state);
            newState[action.status.id] = action.status;
            return newState;
        case REMOVE_STATUS:
            newState = Object.assign({}, state);
            delete newState[action.statusId];
            return newState
        default:
            return state;
    }
};

export default StatusesReducer;