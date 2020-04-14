import { connect } from 'react-redux';
import RouteForm from './route_form';
import { createRoute } from '../../../actions/route_actions';

const msp = state => ({
    errors: state.errors.routes,  
    currentUser = state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    createRoute: route => dispatch(createRoute(route))
});

export default connect(msp, mdp)(RouteForm);