import {connect} from 'react-redux';
import MyHome from './my_home';
import {logout} from "../../actions/session_actions";

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(MyHome);