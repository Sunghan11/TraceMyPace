import { connect } from 'react-redux';
import Workout from './workout_form';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions'

const msp = state => {
    debugger;
    return {
    currentUser: state.entities.users[state.session.id],
    routes: state.entities.routes
    }
}

const mdp = dispatch => ({
    createWorkout: workout => dispatch(createWorkout(workout)),
    fetchRoutes: () => dispatch(fetchRoutes())
})

export default connect(msp, mdp)(Workout);