import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT } from '../actions/workout_actions';

const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_WORKOUTS:
            return action.workouts;
        case RECEIVE_WORKOUT:
            newState = Object.assign({}, state);
            newState[action.workout.id] = action.workout;
            return newState;
        case REMOVE_WORKOUT:
            newState = Object.assign({}, state);
            delete newState[action.workoutId];
            return newState
        default:
            return state;
    }
};

export default workoutsReducer;