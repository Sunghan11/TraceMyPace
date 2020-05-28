import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            newState = Object.assign({}, state);
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState
        default:
            return state;
    }
};

export default CommentsReducer;