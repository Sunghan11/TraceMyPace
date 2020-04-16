import {connect} from 'react-redux';
import RouteMap from './route_map';
import {createRoute} from '../../../actions/route_actions';

const msp = state => ({
    // route: state.entities.route,
    // currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.routes,
});

const mdp = dispatch => ({
    createRoute: route => dispatch(createRoute(route))
});

export default connect(msp, mdp)(RouteMap)