import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWorkouts();
    }

    render() {
        let user = this.props.user

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
                        if (workout.authorId === this.props.currentUser.id) {
                            return <WorkoutIndexItem
                                workout={workout}
                                user={this.props.currentUser}
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