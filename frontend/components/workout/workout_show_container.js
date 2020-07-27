import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';
import {fetchUser} from '../../actions/session_actions';


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
        routes: Object.values(state.entities.routes),
    }
}

const mdp = dispatch => ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    // fetchUser: id => dispatch(fetchUser(id)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)),
    fetchRoutes: () => dispatch(fetchRoutes())
})

export default connect(msp, mdp)(WorkoutShow);