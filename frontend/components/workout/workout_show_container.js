import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';
import {fetchUser} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
    debugger;
    const workout = state.entities.workouts[ownProps.match.params.workoutId];
    let currentUser = {};
    debugger;

    if (workout) {
        currentUser = state.entities.users[workout.userId];
        debugger;
    }
    return {
        currentUser,
        workout,
        workouts: state.entities.workouts,
        routes: Object.values(state.entities.routes),
    }
}

const mdp = dispatch => ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    // fetchUser: id => dispatch(fetchUser(id)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)),
    fetchRoutes: () => dispatch(fetchRoutes()),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
})

export default withRouter(connect(msp, mdp)(WorkoutShow));