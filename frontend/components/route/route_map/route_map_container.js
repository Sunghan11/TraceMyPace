import {connect} from 'react-redux';
import RouteMap from './route_map';
import {createRoute, fetchRoutes} from '../../../actions/route_actions';
import {createLocation, fetchLocations} from '../../../actions/location_actions';


const msp = state => ({
    routes: state.entities.routes,
    // currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.routes,
});

const mdp = dispatch => ({
    createRoute: route => dispatch(createRoute(route)),
    fetchRoute: () => dispatch(fetchRoutes()),
    // createLocation: location => dispatch(createLocation(location)),
    // fetchLocations: () => dispatch(fetchLocations())

});

export default connect(msp, mdp)(RouteMap)