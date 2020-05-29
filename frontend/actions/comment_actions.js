import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComments = comments =>  ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveCommentErrors = errors => ({
    RECEIVE_COMMENT_ERRORS,
    errors
});

export const fetchComments = statusId => dispatch => (
    APIUtil.fetchComments(statusId)
        .then(comments => dispatch(receiveComments(comments))
    ), err => dispatch(receiveCommentErrors(err.responseJSON))
);

export const fetchComment = commentId => dispatch => (
    APIUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment))
    ), err => dispatch(receiveCommentErrors(err.responseJSON))
)

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment))
        ), err => dispatch(receiveCommentErrors(err.responseJSON))
)

export const deleteComment = commentId => dispatch => (
    APIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId))
        ), err => dispatch(receiveCommentErrors(err.responseJSON))
)
