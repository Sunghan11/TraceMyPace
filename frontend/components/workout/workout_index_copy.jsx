import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);
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

        return (
            <>
                <div id="workout-index-container">
                    <div id="workout-title">
                        MY WORKOUTS
                    </div>
                    <div id="workout-create">
                        <Link to="/workouts/create/">
                            <button id="workout-create-button">
                                LOG A WORKOUT
                            </button>
                        </Link>
                    </div>
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