import * as APIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

export const receiveWorkouts = workouts => ({
    type: RECEIVE_WORKOUTS,
    workouts
})

export const receiveWorkout = workout => ({
    type: RECEIVE_WORKOUT,
    workout
});

export const removeWorkout = workoutId => ({
    type: REMOVE_WORKOUT,
    workoutId
});

export const receiveWorkoutErrors = errors => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
});

export const fetchWorkouts = () => dispatch => (
    APIUtil.fetchWorkouts()
        .then(workouts => dispatch(receiveWorkouts(workouts))
    , err => dispatch(receiveWorkoutErrors(err.responseJSON))
));

export const fetchWorkout = workoutId => dispatch => (
    APIUtil.fetchWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout))
    , err => dispatch(receiveWorkoutErrors(err.responseJSON))
));

export const createWorkout = workout => dispatch => (
    APIUtil.createWorkout(workout).then(workout => dispatch(receiveWorkout(workout))
        , err => dispatch(receiveWorkoutErrors(err.responseJSON))
    ));

export const deleteWorkout = workoutId => dispatch => (
    APIUtil.deleteWorkout(workoutId)
        .then(() => dispatch(removeWorkout(workoutId))
    , err => dispatch(receiveWorkoutErrors(err.responseJSON))
));
