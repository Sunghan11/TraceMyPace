import {connect} from 'react-redux';
import RouteIndex from './route_index';
import {fetchRoutes, deleteRoute} from '../../actions/route_actions';
import {logout} from '../../actions/session_actions';
// import {fetchLocations} from '../../actions/location_actions';

// const msp = state => ({
    // routes: state.entitites.routes,
    // users: state.entities.users
// });
const msp = state => {
    debugger;
    const routes = state.entities.routes;
    const currentUser = state.entities.users;
    return ({ routes, currentUser })
}

const mdp = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    deleteRoute: routeId => dispatch(deleteRoute(routeId)),
    logout: () => dispatch(logout()),
    // fetchLocations: () => dispatch(fetchLocations())
});

export default connect(msp, mdp)(RouteIndex);