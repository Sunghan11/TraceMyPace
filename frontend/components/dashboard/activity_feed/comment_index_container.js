import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments, deleteComment} from '../../../actions/comment_actions';

const msp = state => {
    return {
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id]
}};

const mdp = dispatch => {
    return {
    fetchComments: (statusId) => dispatch(fetchComments(statusId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
    }
};

export default connect(msp, mdp)(CommentIndex);