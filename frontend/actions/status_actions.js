import * as APIUtil from '../util/status_api_util';

export const RECEIVE_ALL_STATUSES = 'RECEIVE_ALL_STATUSES';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const REMOVE_STATUS = 'REMOVE_STATUS';
export const RECEIVE_STATUS_ERRORS = "RECEIVE_STATUS_ERRORS";

const receiveStatuses = statuses => ({
    type: RECEIVE_STATUSES,
    statuses
})

const receiveStatus = status => ({
    type: RECEIVE_STATUS,
    status
});

const removeStatus = statusId => ({
    type: REMOVE_STATUS,
    statusId
});

const receiveStatusErrors = errors => ({
    RECEIVE_STATUS_ERRORS,
    errors
});

export const fetchStatuses = () => dispatch => (
    APIUtil.fetchStatuses()
        .then(statuses => dispatch(receiveStatuses(statuses))
        ), err => dispatch(receiveStatusErrors(err.responseJSON))
);

export const fetchStatus = statusId => dispatch => (
    APIUtil.fetchStatus(statusId)
        .then(status => dispatch(receiveStatus(status))
        ), err => dispatch(receiveStatusErrors(err.responseJSON))
)

export const createStatus = status => dispatch => (
    APIUtil.createStatus(status)
        .then(status => dispatch(receiveStatus(status))
        ), err => dispatch(receiveStatusErrors(err.responseJSON))
)

export const deleteStatus = statusId => dispatch => (
    APIUtil.fetchStatus(statusId)
        .then(() => dispatch(removeStatus(statusId))
        ), err => dispatch(receiveStatusErrors(err.responseJSON))
)
