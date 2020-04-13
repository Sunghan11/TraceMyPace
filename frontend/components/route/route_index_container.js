import {connect} from 'react-redux';
import RouteIndex from './route_index';
import {fetchRoutes} from '../../actions/route_action';

const msp = state => ({
    routes: state.entitites.routes
});

const mdp = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(msp, mdp)(RouteIndex);