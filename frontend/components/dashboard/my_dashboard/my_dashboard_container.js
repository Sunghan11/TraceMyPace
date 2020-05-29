import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MyDashboard from './my_dashboard';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(MyDashboard);