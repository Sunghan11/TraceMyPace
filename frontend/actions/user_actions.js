import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then(users => dispatch(receiveUser(users)))
    // }, err => {
    // return dispatch(receiveErrors(err.responseJSON))
    // })
);