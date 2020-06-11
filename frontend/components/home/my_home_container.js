import {connect} from 'react-redux';
import MyHome from './my_home';
import {logout} from "../../actions/session_actions";
// import {fetchRoutes} from '../../actions/route_actions';

const msp = state => {
    debugger;
    const routes = state.entities.routes;
    const currentUser = state.entities.users[state.session.id];

    return ({routes, currentUser })
    // return ([currentUser])
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(msp, mdp)(MyHome);