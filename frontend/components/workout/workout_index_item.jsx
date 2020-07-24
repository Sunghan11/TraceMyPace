import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // visible: false
        }
    }

    deleteWorkout() {
        debugger;
        this.props.deleteWorkout(this.props.workout.id)
    }

}

export default WorkoutIndexItem;