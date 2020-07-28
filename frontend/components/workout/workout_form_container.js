import { connect } from 'react-redux';
import WorkoutForm from './workout_form';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';
import { removeErrors } from '../../actions/error_actions';

const msp = state => {
    debugger;
    return {
    errors: state.errors.workout,
    currentUser: state.entities.users[state.session.id],
    routes: state.entities.routes,
    workouts: state.entities.workouts,
    }
}

const mdp = dispatch => ({
    createWorkout: workout => dispatch(createWorkout(workout)),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchRoutes: () => dispatch(fetchRoutes()),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(msp, mdp)(WorkoutForm);