import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class WorkoutForm extends React.Component {
    constructor(props) {
        debugger;
        super(props)
        this.state = {
            name: '',
            date: '',
            gear_used: 'No Gear',
            description: '',
            user_id: props.currentUser.id,
            route_id: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        debugger;
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    // update2(field1, field2) {
    //     return e => (
    //         this.setState({ [field1]: e.target.value }),
    //         this.setState({ [field2]: e.target.value })
    //     )
    // };

    componentDidMount() {
        this.props.fetchRoutes();
        // return this.props.removeErrors();
    };

    componentWillMount() {
        this.props.fetchRoutes();
    }


    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.props.createWorkout({
            name: this.state.name,
            date: this.state.date,
            description: this.state.description,
            user_id: this.state.user_id,
            // route_id: this.state.route_id.slice(0,2),
            // route: this.state.route
            route: this.state.route_id

        })
        this.props.history.push('/workouts')
    };

    renderErrors() {
        return (
            <ul className="display-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}> {error}</li>
                ))}
            </ul>
        );
    }


    render() {

        debugger;
        const routes = Object.values(this.props.routes);
        const currentUser = this.props.currentUser
        const GEARS = ["No Gear"]
        if (Object.values(this.props.routes).length < 1 ) {
            return null;
        }

        
        return (
            <>
                <div id="workout-form">
                    <div id="workout-form-container">
                        <div id="workout-title">
                            <span>LOG A WORKOUT</span>
                        </div>
                        <br/>
                        <div className="line"></div>
                        <br/>
                        <div id="workout-heading">
                            <i className="fas fa-dumbbell fa-2x"></i>
                            <span>Stay on top of your fitness goals. Create and log your workouts by filling out details below.</span>
                        </div>
                        <div id="workout-form-body">
                            <form onSubmit={this.handleSubmit}>
                                <div id="workout-form-body1">
                                    <label id="workout-form-name">
                                        <span>Workout name</span>
                                        <br/>
                                        <input
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.update('name')}
                                        />
                                    </label>
                                    <label id="workout-form-date">
                                        <span>Date</span>
                                        <br/>
                                        <input
                                            type="date"
                                            value={this.state.date}
                                            onChange={this.update('date')}
                                        />
                                    </label>
                                </div>
                                <label id="workout-form-gear">
                                    <span>Gear used</span>
                                    <br/>
                                    <select className="workout-gear" onChange={this.update("gear_used")}>
                                        {GEARS.map(gear => {
                                            debugger;
                                            return <option key={`gear-${gear}`} value={gear}>{gear}</option>})}
                                    </select>
                                    {/* <img src={window.downArrow} /> */}
                                </label>
                                <label id="workout-form-description">
                                    <span>How did it go?</span>
                                    <br/>
                                    {/* <input
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                    /> */}
                                    <textarea 
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                    />
                                </label>
                                <label id="workout-form-route">
                                    <span>Route</span>
                                    <br/>
                                    <select className="workout-route" onChange={this.update("route_id")}>
                                        <option value="" disabled selected>Select...</option>
                                        {routes.slice(0).reverse().map(route => {
                                            debugger;
                                            if (route.userId === currentUser.id) {
                                                return  <option onClick={this.update('route_id')}
                                                key={`route-${route.id}`}
                                                value={route.id}
                                                placeholder="Select...">
                                                {/* style={<img className='workout-map' src={route.routeMap} />}> */}
                                                    {route.name} {route.distance} mi
                                                    {/* <div id="workout-route-select">
                                                        <div id="workout-route-select-name">
                                                            {route.name}
                                                        </div>
                                                        <div id="workout-route-select-distance">
                                                            {(route.distance).toFixed(1)} mi
                                                            
                                                        </div>
                                                    </div>
                                                     */}
                                                </option>
                                            }
                                        })}
                                    </select>
                                    {/* <img src={window.downArrow} /> */}
                                </label>
                                {/* <input id="workout-form-save-button" type="submit" value="SAVE"/> */}


                                {/* <div className="workout-form-save"> */}
                                    <button 
                                        className="workout-form-save-button"
                                        type="submit"
                                        value="SAVE">SAVE</button>

                                {/* </div> */}

                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default withRouter(WorkoutForm);