import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';


const msp = state => {
    debugger;
    return {
    currentUser: state.entities.users[state.session.id],
    workouts: Object.values(state.entities.workouts),
    routes: Object.values(state.entities.routes),
    }
}

const mdp = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId)),
    fetchRoutes: () => dispatch(fetchRoutes())
})

export default connect(msp, mdp)(WorkoutIndex);