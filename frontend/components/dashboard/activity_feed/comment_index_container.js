import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {fetchComments, deleteComment} from '../../../actions/comment_actions';

const msp = state => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id]
});

// const msp = state => {
//     debugger;
//     const comments = state.entities.comments;
//     return ({ comments })
// }

const mdp = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(msp, mdp)(CommentIndex);