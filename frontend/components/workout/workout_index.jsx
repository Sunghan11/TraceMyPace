import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);

       this.totalDistance = 0;
       this.totalWorkouts = 0;
       this.totalDuration = 0;
       this.totalCalories = 0;
    }

    addWorkouts() {
        this.totalWorkouts = 0;
        debugger;
        this.props.workouts.map(workout => {
            if (workout.userId === this.props.currentUser.id) {
                this.totalWorkouts += 1
            }
        })
    }

    addDistance() {
        this.totalDistance = 0;
        debugger;
        this.props.routes.map(route => {
            this.props.workouts.map(workout => {
                if (workout.routeId === route.id) {
                    this.totalDistance += route.distance;
                }
            })
        })
    }

    componentDidMount() {
        this.props.fetchWorkouts();
        this.props.fetchRoutes();
    }

    componentWillMount() {
        this.props.fetchRoutes();
    }

    render() {
        debugger;
        let currentUser = this.props.currentUser;
        const routes = Object.values(this.props.routes);
        this.addWorkouts();
        this.addDistance();
        


        return (
            <>
                <div id="workout-index-container">
                    <div id="workout-header">
                        <div id="workout-title">
                            <span>MY WORKOUTS</span>
                        </div>
                        <div id="workout-create">
                            <Link to="/workouts/create/">
                                <button id="workout-create-button">
                                    ADD WORKOUT
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div id="workout-mid-header">
                        <div id="workout-mid-d">
                            <span id="w-m-d-1">{this.totalDistance}</span>
                            <span id="w-m-d-2">Distance (mi)</span>
                        </div>
                        <div id="workout-mid-divider"></div>
                        <div id="workout-mid-d">
                            <span id="w-m-d-1">0:00</span>
                            <span id="w-m-d-2">Duration (m)</span>
                        </div>
                        <div id="workout-mid-divider"></div>
                        <div id="workout-mid-d">
                            <span id="w-m-d-1">{(this.totalDistance * 112.8).toFixed(0)}</span>
                            <span id="w-m-d-2">Calories (kcal)</span>
                        </div>
                        <div id="workout-mid-divider"></div>
                        <div id="workout-mid-d">
                            <span id="w-m-d-1">{this.totalWorkouts}</span>
                            <span id="w-m-d-2">Workouts</span>
                        </div>
                    </div>
                    <div id="workout-index-table">
                        <span id="workout-i-t-1">DATE</span>
                        <span id="workout-i-t-2">ACTIVITY</span>
                        <span id="workout-i-t-3">DISTANCE</span>
                        <span id="workout-i-t-4">DURATION</span>
                        <span id="workout-i-t-5">DELETE</span>
                    </div>
                    <div className="line-workout"></div>
                   
                    <div id="workout-index-items">
                        {this.props.workouts.slice(0).reverse().map(workout => {
                            if (workout.userId === currentUser.id) {
                                
                                debugger;
                                return <WorkoutIndexItem
                                    workout={workout}
                                    user={this.props.currentUser}
                                    routes={routes}
                                    key={`workout-${workout.id}`}
                                    deleteWorkout={this.props.deleteWorkout}
                                />
                            }
                        })}
                    </div>
                </div>
            </>
        )
    }    
}

export default WorkoutIndex;