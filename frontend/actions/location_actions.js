import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const RECEIVE_LOCATION_ERRORS = "RECEIVE_LOCATION_ERRORS";

const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
});

const receiveLocation = location => ({
    type: RECEIVE_LOCATION,
    location
});

const removeLocation = locationId => ({
    type: REMOVE_LOCATION,
    locationId
});

const receiveLocationErrors = errors => ({
    RECEIVE_LOCATION_ERRORS,
    errors
});

export const fetchLocations = () => dispatch => (
    APIUtil.fetchLocations()
    .then(locations => dispatch(receiveLocations(locations))
    ), err => dispatch(receiveLocationErrors(err.responseJSON))
);

export const fetchLocation = locationId => dispatch => (
    APIUtil.fetchLocation(locationId)
    .then(location => dispatch(receiveLocation(location))
    ), err => dispatch(receiveLocationErrors(err.responseJSON))
)

export const createLocation = location => dispatch => (
    APIUtil.createLocation(location)
        .then(location => dispatch(receiveLocation(location))
        ), err => dispatch(receiveLocationErrors(err.responseJSON))
)

export const updateLocation = location => dispatch => (
    APIUtil.updateLocation(location)
        .then(location => dispatch(receiveLocation(location))
        ), err => dispatch(receiveLocationErrors(err.responseJSON))
)

export const deleteLocation = locationId => dispatch => (
    APIUtil.deleteLocation(locationId)
        .then((location) => dispatch(removeLocation(location))
        ), err => dispatch(receiveLocationErrors(err.responseJSON))
)

//location.id?
//locationId?

// export const deleteRoute = (locationId) => dispatch => (
//     APIUtil.deleteRoute(locationId)
//         .then(() => dispatch(removeRoute(locationId)))
// );