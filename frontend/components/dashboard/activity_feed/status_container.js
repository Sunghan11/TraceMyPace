import {connect} from 'react-redux';
import Status from './status';
import {createStatus} from '../../../actions/status_actions';

const msp = state => ({
    user: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    createStatus: status => dispatch(createStatus(status))
})

export default connect(msp, mdp)(Status);