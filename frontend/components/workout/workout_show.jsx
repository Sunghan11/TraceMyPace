import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // visible: false
        }
        debugger;
    
        this.route = "";
        this.creationDate = "";
        this.workoutDate = "";
        this.deleteWorkout = this.deleteWorkout.bind(this);
        this.map = null;
        this.markersArr = [];
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: 'magenta',
                strokeWeight: 4,
            },
            supressMarkers: true
        });
    }

    componentDidMount() {
        debugger;
        this.props.fetchWorkout(this.props.match.params.workoutId);
        this.props.fetchRoutes();
    }

    // componentWillMount() {
    //     this.props.fetchRoutes();
    // }

    // deleteWorkout() {
    //     debugger;
    //     this.props.deleteWorkout(this.props.workout.id)
    // }
    
    // createdDate() {
    //     const MONTHS = [
    //         "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
    //     ]
    //     const createdDate = this.props.workout.createdAt.split('-');
    //     const cDate = `${MONTHS[Number(createdDate[1])]} ${createdDate[2].slice(0, 2)}, ${createdDate[0]}`;
    //     this.creationsDate = cDate;
    // }

    updateDate() {
        const MONTHS = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
        ]
        const logDate = this.props.workout.date.split("-");
        const lDate = `${MONTHS[Number(logDate[1])]} ${logDate[2]} ${logDate[0]}`
        this.workoutDate = lDate;
    }



    componentDidUpdate() {
        debugger;
        if (this.route) {
            this.locationMarkersArr();
            this.initMap();
        }
      
    }

    initMap() {
        debugger;
        const mapEle = document.getElementById("workout-map");
        let options = {
            mapTypeId: google.maps.MapTypeId.ROADMAP
            // center: {lat:40.736436, lng: -73.994061},
            // zoom: 15,
            // travelMode: "WALKING"
        }
        this.map = new google.maps.Map(mapEle, options);
        this.dirRend.setMap(this.map);
        this.showRoute(this.dirServ, this.dirRend);
        debugger;
    }

    locationMarkersArr() {
        debugger;
        let coords = this.route.locationMarkers.split(',').map(Number);

        for (let i = 0; i < coords.length; i += 2) {
            let coord = { lat: coords[i], lng: coords[i + 1] };
            let marker = new google.maps.Marker({
                position: coord,
                map: this.map,
            });

            this.markersArr.push(marker);
        }
        debugger;
    }

    showRoute(dirServ, dirRend) {
        debugger;
        let start = this.markersArr[0].position;
        let finish = this.markersArr[this.markersArr.length - 1].position;
        let waypoints = []
        for (let i = 1; i < this.markersArr.length - 1; i++) {
            waypoints.push({
                location: this.markersArr[i].position,
                stopover: false,
            });
        }

        const request = {
            origin: start,
            waypoints: waypoints,
            destination: finish,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
        }
        this.dirServ.route(request, (response, status) => {
            if (status === "OK") {
                this.dirRend.setDirections(response);
            }
        });
    }

    createdDate() {
        const createdDate = this.route.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0, 2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }









    deleteWorkout() {
        debugger;
        this.props.deleteWorkout(this.props.workout.id);
        this.props.history.push('/workouts');
    }
    
    render() {
        let currentUser = this.props.currentUser;
        debugger;
        if (!this.props.workout) return null;
        let deleteButton;
        if (this.props.currentUser.id === this.props.workout.userId) {
            deleteButton = <button
                onClick={this.deleteWorkout}>DELETE
            </button>
        } else {
            deleteButton = ""
        }

        this.props.routes.map(route => {
            if (route.id == this.props.workout.routeId) {
                this.route = route;
            }
        });
        const steps = Math.floor(this.route.distance * 2210)
        this.updateDate();
        this.createdDate();
        let activity;

        if (this.route.activity === "Walk") {
            activity = <p><i className="fas fa-walking"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Winter Sport/Activity") {
            activity = <p><i className="fas fa-skiing"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Bike Ride") {
            activity = <p><i className="fas fa-biking"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Swim") {
            activity = <p><i className="fas fa-swimmer"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Run") {
            activity = <p><i className="fas fa-running fa"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Hike") {
            activity = <p><i className="fas fa-hiking"></i> {this.route.activity.toUpperCase()}</p>
        } else if (this.route.activity === "Sport/ Other Activity") {
            activity = <p><i className="fas fa-skating"></i> {this.route.activity.toUpperCase()}</p>
        }
        debugger;


        return (
            <>  
                <UserNavContainer />
                <div id="home-page-sign">
                    <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>
                <div id="workout-show-container">
                    <div id="workout-show-header">
                        <Link id="workout-show-header-link" to="/my_home/user_dashboard">
                            <span>Home</span>
                        </Link>
                        <i className="fas fa-caret-right"></i>
                        <Link id="workout-show-header-link" to="/workouts">
                            <span>My Workouts</span>
                        </Link>
                        <i className="fas fa-caret-right"></i>
                        <span id="workout-show-header-d">Details</span>

                    </div>
                    <div id="workout-show-container-top">
                        <div id="workout-show-info-top">
                            <div id="workout-show-name">
                                {this.props.workout.name.toUpperCase()}
                            </div>
                            <div id="workout-show-share">
                                <span id="workout-share">CONTACT:</span>
                                <a target="_blank" href="https://www.linkedin.com/in/elijah-nam-6a412b25/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a target="_blank" href="https://github.com/Sunghan11">
                                    <i className="fab fa-github-square"></i>
                                </a>
                                <a target="_blank" href="https://sunghan11.github.io/">
                                    <i className="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                        <div id="workout-show-info">
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">DISTANCE</span>
                                <span id="workout-show-info-description"><span id="workout-show-info-description-1">{this.route.distance}</span>mi</span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">DURATION</span>
                                <span id="workout-show-info-description"><span id="workout-show-info-description-1">--</span></span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">AVG PACE</span>
                                <span id="workout-show-info-description"><span id="workout-show-info-description-1">--</span></span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">KCAL</span>
                                <span id="workout-show-info-description"><span id="workout-show-info-description-1">{(this.route.distance * 112.8).toFixed(0)}</span>cal</span>
                            </div>
                        </div>
                        <div className="line-workout"></div>
                        <div id="workout-show-activity">
                            {activity}

                        </div>
                        <div className="line-workout"></div>
                        <div id="workout-show-info-user">
                            <div id="workout-show-info-user-pic">
                                <img src={window.avatarURL} />
                            </div>
                            <div id= "workout-show-info-user-data">
                                <span>{this.workoutDate}</span>
                                <span>by {currentUser.first_name.toUpperCase()} {currentUser.last_name.toUpperCase()}</span>
                            </div>
                            <div id="workout-show-info-user-description">
                                <span>NOTE</span>
                                <span>{this.props.workout.description}</span>
                            </div>
                        </div>
                        <div className="line-workout"></div>
                        <div id="workout-show-delete">
                            <span id="workout-show-delete-button">{deleteButton}</span>
                        </div>
                    </div>
                </div>
                <div id="workout-show-container-mid">
                    <div id="workout-show-container-mid-1">
                        <div id="workout-show-container-mid-1-1">
                            <span>ROUTE NAME</span>
                            <Link id="workout-show-route-link" to={`/routes/view/${this.route.id}`}>
                                <span>{this.route.name}</span>
                            </Link>
                        </div>



                        <div id="workout-show-container-mid-1-2">
                            <span>CITY</span>
                            <span>{this.route.city}</span>
                        </div>
                    </div>
                    <div className="line-workout"></div>
                    <div id="workout-show-map">
                        {/* <SmallMap 
                                route={this.props.route}
                                locations={Object.values(this.props.locations)}
                            /> */}
                        {/* <img className="route-show-map" src={newRouteMap} /> */}
                        <div id="workout-map" ref="map"></div>
                    </div>
                    <div id="workout-show-container-mid-3">
                            MAPPED {this.creationDate} BY {currentUser.first_name} {currentUser.last_name}
                    </div>
                </div>
                <br/>
                <br/>
                <Footer />
            </>
        )
    }
}

export default WorkoutShow;