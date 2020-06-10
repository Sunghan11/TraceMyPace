import {connect} from 'react-redux';
import RouteShow from './route_show';
import {fetchRoute, deleteRoute} from '../../actions/route_actions'
import {fetchUser} from '../../actions/session_actions';
import {fetchLocations } from "../../actions/location_actions";

const msp = (state, ownProps) => {
    const route = state.entities.routes[ownProps.match.params.routeId];
    let user = {};
    // let locations = [];
    
    debugger;
    if (route) {
        user = state.entities.users[route.userId];
        // locations = Object.values(state.entitites.locations);
        // locations.filter(location => {
        //     return location.route_id === parseInt(ownProps.match.params.routeId);
        // })
    }
    return {
        currentUser: state.entities.users,
        route,
        user,
        // locations,
    };
    // route: state.entities.routes[ownProps.match.params.routeId],
    // user: state.entities.users
};

const mdp = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    fetchUser: id => dispatch(fetchUser(id)),
    deleteRoute: routeId => dispatch(deleteRoute(routeId)),
    fetchLocations: () => dispatch(fetchLocations())
});

export default connect(msp, mdp)(RouteShow);