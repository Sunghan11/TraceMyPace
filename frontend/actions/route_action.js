import * as APIUtil from '../util/route_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

export const receiveRoutes = (routes) => ({
    type: RECEIVE_ROUTES,
    routes
});

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route
});

export const removeRoute = (routeId) => ({
    type: REMOVE_ROUTE,
    routeId
});

export const RECEIVE_ROUTE_ERRORS = (errors) => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
});

export const fetchRoutes = () => (
    APIUtil.fetchRoutes()
    .then( routes => dispatch(receiveRoutes(routes))
    ), err => (dispatch(receiveErrors(err.responseJSON)))
);

export const fetchRoute = (route) => (
    APIUtil.fetchRoute(route)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveErrors(err.responseJSON))
);

export const createRoute = (route) => (
    APIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveRoute(err.responseJSON))
);

export const updateRoute = (route) => (
    APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route))
    ), err => dispatch(receiveErrors(err.responseJSON))
);

export const deleteRoute = (routeId) => (
    APIUtil.deleteRoute(routeId)
    .then(() => dispatch(removeRoute(routeId))
    ), err => dispatch(receiveErrors(err.responseJSON))
);
