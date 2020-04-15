import React from 'react';
import UserNav from '../../nav/user_nav';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            activity: "",
            distance: 0,
        }

        this.initMap = this.initMap.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.map = null;
        this.markers = [];
        this.addMarker= this.addMarker.bind(this);
        this.clearRoutes = this.clearRoutes.bind(this);
        this.undoMarker = this.undoMarker.bind(this);
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        
    }
    
    componentDidMount() {
        this.initMap();
    }

    setCurrentPosition(map) {
        let pos;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos)
                }
            )
        }
    }

    initMap() {
        
        const options = {
            center: {lat:40.736436, lng: -73.994061},
            zoom: 15,
        }

        let map = new 
        google.maps.Map(this.refs.map, options);
        this.setCurrentPosition(map);
        this.map = map;


        this.map.addListener('click',
            event => {
                this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng() });
        })
    }
    addMarker(coords) {
        let marker = new google.maps.Marker({
            position: coords,
            map: this.map
        })
        // if(props.iconImage) {
        //     marker.setIcon(props.iconImage);
        // }

        // if(props.content) {
        //     var infoWindow = new google.maps.InfoWindow({
        //         content:props.content
        //     });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        this.markers.push(marker);

    }

    clearRoutes() {
        this.markers = [];
        this.setState({ distance: 0 })
        this.dirRend.initMap(null);
        this.dirRend = null;
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        this.dirRend.initMap(this.map); 
    }

    undoMarker(e) {
        e.preventDefault();
        this.markers.pop;

        if(this.markers.length > 1) {
            // this.showRoute({
            //     new google.maps.DirectionsService(), new google.maps.DirectionsRenderer({preserveViewport: true})
            // })
            this.showRoute(this.dirServ, this.dirRend);
        } else {
            this.clearRoutes();
        }
    }

    showRoute(dirServ, dirRend) {
        let start = this.markers[0].position;
        let finish = this.markers[this.markers.length-1].position;
        let waypoints = []
        for (let i = 1; i < this.markers.length - 1; i++) {
            waypoints.push({
                location: this.markers[i].position,
            });
        }

        const marks = {
            origin: start,
            waypoints: waypoints,
            destination: finish,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
        };

        this.dirServ.route(marks, (response, status) => {
            if (status === "OK") {
                this.dirRend.setDirections(response);

                //DirectionsLegs defins a single leg of journey
                //legs give access to object info of each leg.
                //ex. steps[] containers array of objects of each sep leg
                //distance indicates total distance of leg.
                //.value of distance gives distance in meters.
                let totalDistance = 0; //in METERS
                response.routes[0].legs.forEach((leg) => 
                    totalDistance += leg.distance.value);
                let distanceInMiles = totalDistance * .000621371
                this.setState({distance: (distanceInMiles.toFixed(2))})
            }
        })
    }



        // let poly = new google.maps.PolyLine({
        //     strokeColor: '#6A5ACD',
        //     strokeOpactity: 0.7,
        //     strokeWeight: 4
        // });
        // poly.setMap(map);
        



    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRoute({
            name: this.state.name,
            activity: this.state.activity,
            distance: this.state.distance,
            polyline: this.state.polyline,
            user_id: this.props.currentUserId,
            route_map: this.state.route_map

        })
    }

    render() {
        const ACTIVITIES = ["Choose an Actitivity",
            "Walk", "Winter Sport/Activity", "Bike Ride", "Swim",
            "Run", "Sport/ Other Activity", "Hike"
        ];

        // const routes = Object.values(this.props.routes);
        return (
            <>
                <UserNav />
                <div className="routes-map">
                    <div className="routes-main">
                        <div className="routes-title-1">
                            <h2 className="routes-title-1-1">MY ROUTES</h2>
                            <div className="route-details">
                                <h4>Route Details</h4>
                                <div>
                                    <input
                                        value={this.state.name}
                                        onChange={this.update("name")}
                                        type="text"
                                        placeholder="Name this map"
                                    />
                                </div>
                                <div>
                                    <select value={this.state.activity}
                                        className="optA"
                                        onChange={this.update("activity")}>
                                        {ACTIVITIES.map(activity =>
                                            <option key={activity} value={activity}>{activity}</option>)}
                                    </select>
                                </div>
                                <button className="create-route-btn">SAVE ROUTE</button>
                            </div>

                        </div>
                    </div>
                    <div id="map-main">
                        <div id="map-container" ref="map">
                                {/* style={{width:'100%', height:'100%'}}> */}
                        </div>
                        <div id="map-tools">
                            <div id="map-tools-distance">
                                <label>DISTANCE</label>
                                <h2>{this.distance} MI </h2>
                            </div>
                            <div id="map-tools-control">
                                <button onClick={this.undoMarker}><i id="first" class="fas fa-undo fa-2x"></i><br/> UNDO</button>
                                <button onClick={this.clearRoutes}><i id="second" class="fas fa-times fa-2x"></i><br/>CLEAR</button>
                                <button onClick={this.centerRoute}><i id="third" class="fas fa-compress-arrows-alt fa-2x"></i><br/>CENTER</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* userRoutes */}
                </div>
            </> 
        )
    }
}

export default RouteMap;