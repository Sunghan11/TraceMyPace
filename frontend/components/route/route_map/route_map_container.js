import {connect} from 'react-redux';
import RouteMap from './route_map';
import {createRoute, fetchRoutes } from '../../../actions/route_actions';
import {createLocation, fetchLocations} from '../../../actions/location_actions';
import { removeErrors } from '../../../actions/error_actions'; 


const msp = state => {
    debugger;
    return {
        errors: state.errors.route,
        routes: state.entities.routes,
        // currentUserId: state.session.currentUserId,
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => {
    return {
        createRoute: route => dispatch(createRoute(route)),
        fetchRoutes: () => dispatch(fetchRoutes()),
        removeErrors: () => dispatch(removeErrors())
    // createLocation: location => dispatch(createLocation(location)),
    // fetchLocations: () => dispatch(fetchLocations())
    }
};

export default connect(msp, mdp)(RouteMap)