import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USERS = "RECEIVE_USERS"
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const removeErrors = errors => ({
    type: REMOVE_ERRORS,
    errors
})

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})


export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => (dispatch(receiveCurrentUser(user))
        ), err => (dispatch(receiveErrors(err.responseJSON))
        ))
);


export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            return user;
        }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);


export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())))
);

// export const fetchUsers = () => dispatch => (
//     APIUtil.fetchUsers()
//         .then(users => dispatch(receiveUsers(users)))
// );
