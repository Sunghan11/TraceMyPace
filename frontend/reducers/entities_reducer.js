import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './route_reducer';
// import locationsReducer from './locations_reducer';
import commentsReducer from './comments_reducer';
import statusesReducer from './statuses_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    // locations: locationsReducer,
    comments: commentsReducer,
    statuses: statusesReducer
});

export default entitiesReducer;
