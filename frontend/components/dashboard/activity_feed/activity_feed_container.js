import {connect } from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments, deleteComment} from '../../../actions/comment_actions';

const msp = state => ({
    comments: Object.values(state.entitites.comments),
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(msp, mdp)(CommentIndex);