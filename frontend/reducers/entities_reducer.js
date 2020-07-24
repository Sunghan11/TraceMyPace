import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './route_reducer';
// import locationsReducer from './locations_reducer';
import commentsReducer from './comments_reducer';
import statusesReducer from './statuses_reducer';
import workoutsReducer from './workouts_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    // locations: locationsReducer,
    comments: commentsReducer,
    statuses: statusesReducer,
    workouts: workoutsReducer,
});

export default entitiesReducer;
