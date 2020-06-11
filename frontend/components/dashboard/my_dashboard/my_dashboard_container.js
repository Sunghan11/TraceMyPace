import { connect } from 'react-redux';
import MyDashboard from './my_dashboard';
import {fetchRoutes} from '../../../actions/route_actions';

const msp = (state) => {
    const routes = state.entities.routes;
    const currentUser = state.entities.users[state.session.id];
    return ({ routes, currentUser })
};

const mdp = dispatch => ({
    // logout: () => dispatch(logout()),
    fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(msp, mdp)(MyDashboard);