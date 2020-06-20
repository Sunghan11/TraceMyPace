import {connect} from 'react-redux';
import StatusIndex from './status_index';
import {fetchStatuses, deleteStatus} from '../../../actions/status_actions';
import {fetchRoutes} from '../../../actions/route_actions';
// import {fetchComments} from '../../../actions/comment_actions';

const msp = state => ({
    statuses: Object.values(state.entities.statuses),
    currentUser: state.entities.users[state.session.id],
    routes: Object.values(state.entities.routes)
});

const mdp = dispatch => ({
    fetchStatuses: () => dispatch(fetchStatuses()),
    deleteStatus: statusId => dispatch(deleteStatus(statusId)),
    fetchRoutes: () => dispatch(fetchRoutes())
    // fetchComments: () => dispatch(fetchComments())
});

export default connect(msp, mdp)(StatusIndex);