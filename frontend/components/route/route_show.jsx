import React from 'react';
import {Link} from 'react-router-dom';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';
import SmallMap from './route_map/small_map';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.map = null;
        this.markersArr = [];
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: 'purple',
                strokeWeight: 4,
            },
            supressMarkers: true
        });
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        //         const mapEle = document.getElementById("show-map");
        // let options = {
        //     center: {lat:40.736436, lng: -73.994061},
        //     zoom: 15,
        //     // travelMode: "WALKING"
        // }
        // let map = new google.maps.Map(this.refs.map, options);
        // this.dirRend.setMap(map);
        // this.showRoute(this.dirServ, this.dirRend);
        // this.map = map;

        this.props.fetchRoute(this.props.match.params.routeId)
        // this.initMap();
        debugger;
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (this.props.route) {
            // this.decodeMarkers();
            this.initMap();
        }

        if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
            this.props.fetchRoute(this.props.match.params.routeId);
        }
    }

    // initMap() {
    //     const mapEle = document.getElementById("show-map");
    //     let options = {
    //         center: {lat:40.736436, lng: -73.994061},
    //         zoom: 15,
    //         // travelMode: "WALKING"
    //     }
    //     this.map = new google.maps.Map(this.refs.map, options);
    //     this.dirRend.setMap(map);
    //     this.showRoute(dirServ, dirRend);
    // }

    initMap() {

        let rmSplit = this.props.route.routeMap.split("S%7C")
        let splitAgain = rmSplit[1].split("&")
        let splitLatLng = splitAgain[0].split(",")

        const options = {
            // center: { lat: splitLatLng[0].toFloat(), lng: splitLatLng[1].toFloat() },
            center: {lat: 40, lng: 40},
            zoom: 15,
        }

        let map = new google.maps.Map(this.refs.map, options);
        this.dirRend.setMap(map);
        this.map = map;

        
        // this.showRoute(this.dirServ, this.dirRend)
    }

    addMarker(location) {
        // const marker = new google.maps.Marker({ position: location});

        // marker.setMap(this.map);
        // this.markers.push(marker);

        // if (this.markers.length > 1) {
        //     this.markers.forEach(marker => marker.setMap(null));
        //     this.displayRoute(
        //         this.markers[0].position,
        //         this.markersArray[this.markers.length - 1].position,
        //         this.markers.slice(1, this.markers.length - 1),
        //         this.dirServ,
        //         this.dirRend
        //     )
        // }
    }

    // decodeMarkers() {
    //     debugger;
    //     let coords = this.props.route.encodedMarkers.split(',').map(Number);

    //     for(let i = 0; i < coords.length; i += 2) {
    //         let coord = {lat: coords[i], lng: coords[i+1] };
    //         let marker = new google.maps.Marker({
    //             position: coord,
    //             map: this.map,
    //         });

    //         this.markersArr.push(marker);
    //     }
    // }

    // showRoute(dirServ, dirRend) {
    //     let start = this.markersArr[0].position;
    //     let finish = this.markersArr[this.markersArr.length-1].position;
    //     let waypoints = []
    //     for (let i = 1; i < this.markersArr.length - 1; i++) {
    //         waypoints.push({
    //             location: this.markersArr[i].position,
    //             stopover: false,
    //         });
    //     }

    //     const request = {
    //         origin: start,
    //         waypoints: waypoints,
    //         destination: finish,
    //         travelMode: google.maps.DirectionsTravelMode.WALKING,
    //     }
    //     this.dirServ.route(request, (response, status) => {
    //         if (status === "OK") {
    //             this.dirRend.setDirections(response);
    //         }
    //     });
    // }

    handleClick() {
        // debugger;
        this.props.deleteRoute(this.props.route.id)
        this.props.history.push('/routes/my_routes')
    }

    render () {

        const routeMapCopy = this.props.route.routeMap;
        const rMSplit = routeMapCopy.split("75");
        const rMJoin1 = `${rMSplit[0]}1320${rMSplit[1]}780${rMSplit[2]}`;
        let newRouteMap = rMJoin1.slice(0,-1).concat("5");
        
        

        const route = this.props.route;
        debugger;
        const steps = Math.floor(route.distance * 2210)
        let activity;

        if (route.activity === "Walk") {
            activity = <p><i class="fas fa-walking"></i> {route.activity}</p>
        } else if (route.activity === "Winter Sport/Activity") {
            activity = <p><i class="fas fa-skiing"></i> {route.activity}</p>
        } else if (route.activity === "Bike Ride") {
            activity = <p><i class="fas fa-biking"></i> {route.activity}</p>
        } else if (route.activity === "Swim") {
            activity = <p><i class="fas fa-swimmer"></i> {route.activity}</p>
        } else if (route.activity === "Run") {
            activity = <p><i class="fas fa-running"></i> {route.activity}</p>
        } else if (route.activity === "Hike") {
            activity = <p><i class="fas fa-hiking"></i> {route.activity}</p>
        } else if (route.activity === "Sport/ Other Activity") {
            activity = <p><i class="fas fa-skating"></i> {route.activity}</p>
        }
        debugger;
        // if (!this.props.route) {
        //     return null;
        // }
        // const person = {first_name = "",
        return (
            <>
                <UserNavContainer/>
                <br/>
                <div className="route-show-main">

                    <div className="route-show-info">
                        <div id="route-show-top">
                            <div id="route-show-username">{this.props.user.first_name} {this.props.user.last_name}</div>
                            <div id="route-show-info-info">
                                {activity}
                                <p><i className="fas fa-map-marker-alt"></i>   {route.city}</p>
                                <p><i className="fas fa-route"></i>   {route.distance} MI</p>
                                <p><i class="fas fa-shoe-prints"></i> {steps} STEPS</p>
                            </div>
                            <div id="route-show-name">{route.name}</div>
                        </div>
                    </div>
                    <div id="route-show-map">
                        {/* <SmallMap /> */}
                        <img className="route-show-map" src={newRouteMap} />
                        <div id="show-map" ref="map"></div>
                    </div>
                    <div id="route-show-buttons">
                        <button className="route-show-button" id="route-show-delete" onClick={this.handleClick}>
                            Delete Route
                        </button>
                        <Link to='/routes/my_routes'>
                            <div id="routes-show-index">
                                My Routes
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default RouteShow;
