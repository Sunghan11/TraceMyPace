import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (user) => ({
    type: RECEIVE_USERS,
    user
});

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then(users => {
            return dispatch(receiveUsers(users))
    }, err => {
    return dispatch(receiveErrors(err.responseJSON))
    })
);