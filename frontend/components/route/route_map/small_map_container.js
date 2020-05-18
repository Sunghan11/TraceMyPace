import {connect} from 'react-redux';
import {fetchRoute} from '../../../actions/route_actions';
import SmallMap from './small_map';

const mdp = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId))
})

export default connect(null, mdp)(SmallMap);