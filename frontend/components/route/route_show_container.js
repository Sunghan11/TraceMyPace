import {connect} from 'react-redux';
import RouteShow from './route_show';
import {fetchRoute, deleteRoute} from '../../actions/route_actions'
import {fetchUser} from '../../actions/session_actions';

const msp = (state, ownProps) => {
    const route = state.entities.routes[ownProps.match.params.routeId];
    debugger;
    let user = {};

    if (route) {
        user = state.entities.users[route.userId];
    }
    return {
        currentUser: state.entities.users,
        route,
        user,
    };
    // route: state.entities.routes[ownProps.match.params.routeId],
    // user: state.entities.users
};

const mdp = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    fetchUser: id => dispatch(fetchUser(id)),
    deleteRoute: routeId => dispatch(deleteRoute(routeId))
});

export default connect(msp, mdp)(RouteShow);