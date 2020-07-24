import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';


const msp = state => ({
    user: state.entities.users[state.session.id],
    workouts: Object.values(state.entities.workouts)
})

const mdp = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts());
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
})

export default connect(msp, mdp)(WorkoutIndex);