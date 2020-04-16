import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {receiveUser} from '../../actions/user_actions';
import DashNav from './dashboard';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(DashNav);
