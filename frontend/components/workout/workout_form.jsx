import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class WorkoutForm extends React.Component {
    constructor(props) {
        debugger;
        super(props)
        this.state = {
            name: '',
            date: '',
            gear: 'No Gear',
            description: '',
            user_id: props.currentUser.id,
            route_id: '',
            // hh: 0,
            // mm: 0,
            // ss: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.saveWorkout = this.saveWorkout.bind(this);
    }

    update(field) {
        // debugger;
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };



    componentDidMount() {
        this.props.fetchRoutes();
        // return this.props.removeErrors();
    };




    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.props.createWorkout({
            name: this.state.name,
            date: this.state.date,
            description: this.state.description,
            user_id: this.state.user_id,
            route_id: Number(this.state.route_id),
            gear: this.state.gear,
            // route_id: this.state.route_id.slice(0,2),
            // route: this.state.route

        // }).then(this.props.history.push('/workouts'))
        }).then(action => {
            debugger;
            this.props.history.push(`/workouts/view/${action.workout.id}`)
        });
    };

    // renderErrors() {
    //     debugger;
    //     return (
    //         <ul className="display-errors">
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}> {error}</li>
    //             ))}
    //         </ul>
    //     );
    // }


    render() {

        // const newDur = `${this.hh}:${this.mm}:${this.ss}`
        // this.duration = newDur;

        debugger;
        const errors = this.props.errors;
        const routes = Object.values(this.props.routes);
        debugger;
        const currentUser = this.props.currentUser
        const GEARS = ["No Gear"]
        debugger
        if (Object.values(this.props.workouts).length === undefined) {
            return null;
        }
        debugger;

        
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
                            <form className="workout-details" onSubmit={this.handleSubmit}>
                                {/* <div className="errors">{this.renderErrors()}</div> */}
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
                                    <select className="workout-gear" onChange={this.update("gear")}>
                                        {GEARS.map(gear => {
                                            debugger;
                                            return <option key={`gear-${gear.id}`} value={gear}>{gear}</option>})}
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
                                        <option value="" defaultValue>Select...</option>
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
                                {/* <label id="workout-form-duration">
                                        <div>Duration</div>
                                        <div id="duration-log">
                                            <ul>
                                                <li>
                                                <input type="number" placeholder="hh"
                                                    min="0" max="60">
                                                </input>
                                                </li>
                                                :
                                                <li>
                                                    <input type="number" placeholder="mm"
                                                min="0" max="60">
                                                </input>
                                                </li>
                                                :
                                                <li>
                                                    <input type="number" placeholder="ss"
                                                        min="0" max="60">
                                                </input>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                </label> */}
                                {/* <input id="workout-form-save-button" type="submit" value="SAVE"/> */}


                                {/* <div className="workout-form-save"> */}
                                    <button
                                        // onClick={() => {
                                        //     this.saveWorkout;
                                        // }} 
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