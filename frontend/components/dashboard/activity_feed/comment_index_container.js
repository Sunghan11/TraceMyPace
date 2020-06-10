import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments, deleteComment} from '../../../actions/comment_actions';
import {fetchUsers} from '../../../actions/user_actions';

const msp = state => {
    debugger;
    return {
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
}};

const mdp = dispatch => {
    return {
    fetchComments: (statusId) => dispatch(fetchComments(statusId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchUsers: (users) => dispatch(fetchUsers(users))
    }
};

export default connect(msp, mdp)(CommentIndex);