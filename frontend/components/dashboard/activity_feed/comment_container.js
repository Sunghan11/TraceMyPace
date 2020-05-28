import {connect} from 'react-redux';
import Comment from './comment';
import {createComment} from '../../../actions/comment_actions';

const msp = state => ({
    user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(msp, mdp)(Comment);