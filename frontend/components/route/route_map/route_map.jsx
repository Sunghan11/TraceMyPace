import React from 'react';
import RouteNavContainer from '../../nav/route_nav_container';
import SmallMapContainer from '../route_map/small_map_container';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            activity: "",
            distance: 0,
            city: "NY",
            state: "",
            country: "",
            polyline: "",
            route_map: "",
            // locationArr: [], save: false
            // elevations: 0,
            // snapToRoads: true,
            coordArr: [],
        }

        this.cDate = {}
        
        // this.formCity = "";
    
        this.createTime = this.createTime.bind(this);
        this.initMap = this.initMap.bind(this);
        this.createdAt = "",
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.map = null;
        this.markers = [];
        this.addMarker= this.addMarker.bind(this);
        this.clearRoutes = this.clearRoutes.bind(this);
        this.undoMarker = this.undoMarker.bind(this);
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        this.updateCenter = this.updateCenter.bind(this);
        this.autoComplete = null;
        this.searchAutoComplete = this.searchAutoComplete.bind(this);
        // this.stringMarkers = this.stringMarkers.bind(this);
        this.searchUpdate = this.searchUpdate.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
        this.geocoder = new google.maps.Geocoder();
        this.updateCenter2 = this.updateCenter2.bind(this);
        this.getCity = this.getCity.bind(this);     
        this.createRouteMap = this.createRouteMap.bind(this);
    }
    componentDidMount() {
        this.initMap();
        return this.props.removeErrors();
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
            );
        }
    }


    createTime(e) {
        e.preventDefault();
        dt = new Date();
        yr = dt.getFullYear()
        mth = (dt.getMonth() + 1) % 13;
        dy = dt.getDate();
        let nwDate = mth + "/" + dy + "/" + yr;
        this.createdAt = nwDate;
    }

    initMap() {
        
        const options = {
            center: {lat:40.736436, lng: -73.994061},
            zoom: 15,
        }

        let map = new 
        google.maps.Map(this.refs.map, options);
        this.setCurrentPosition(map);
        this.dirRend.setMap(map);
        this.map = map;

        
        this.map.addListener('click',
        event => {
            this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng() });
            //creates route on click;
            this.showRoute(this.dirServ, this.dirRend);
        })
        this.searchAutoComplete();
    }
    addMarker(coords) {
        debugger;

        const marker = new google.maps.Marker({
            position: coords
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
        if (marker && marker.setMap) {
            marker.setMap(null)
        }

    }

    updateCenter(e) {
        e.preventDefault();
        //google Api to get center.
        const searchInput = document.getElementById('search-input');
        //formatted_Address is string containing the human-readable address location;
        //geometry is google library that provide util func for geometric data.
        //ex, spherical, encoding, poly
        this.geocoder.geocode({ 'address': this.state.location }, results => {
            debugger;
            const formAdd = [];
            for (var i = 0; i < results[0].address_components.length; i++) {
                var address = results[0].address_components[i];
                if (address.types[0] === "locality") {
                    formAdd.push(address.short_name)
                } else if (address.types[0] === "administrative_area_level_1") {
                    formAdd.push(address.short_name)
                }
            }


            const formCity = formAdd.join(", ");
            debugger;
            // let addressArr = results[6].formatted_address.split(',');
            this.setState({city: formCity});
            this.map.setCenter(results[0].geometry.location);
            //google api to set map distance view
            this.map.setZoom(15);
        })
    };

    updateCenter2(e) {
        // debugger;
        e.preventDefault();
        let latlng = [];
        for (let i = 0; i < this.markers.length-1; i++) {
            let lati = this.markers[i].position.lat();
            let longi = this.markers[i].position.lng()
            let maps = new google.maps.LatLng(lati,longi)
            latlng.push(maps)
        }

        var latlngbounds = new google.maps.LatLngBounds();
        for (let j = 0; j < latlng.length; j++) {
            latlngbounds.extend(latlng[j]);
        }
        this.map.fitBounds(latlngbounds);

        let myLat = this.markers[0].position.lat();
        let myLng = this.markers[0].position.lng();
        let myLatLng = { lat: myLat, lng: myLng }
        debugger;
        const formAdd = [];
        // let formCity;

        this.geocoder.geocode({ 'location': myLatLng }, results => {
            debugger;
            for (var i = 0; i < results[0].address_components.length; i++) {
                var address = results[0].address_components[i];
                debugger;
                if (address.types[0] === "locality") {
                    formAdd.push(address.short_name)
                } else if (address.types[0] === "administrative_area_level_1") {
                    formAdd.push(address.short_name)
                }
            }
            const formCity = formAdd.join(", ");
            debugger;
            this.setState({ city: formCity });
        })
    }

    getCity(e) {
        e.preventDefault();
        debugger;
        let myLat = this.markers[0].position.lat();
        let myLng = this.markers[0].position.lng();
        let myLatLng = {lat: myLat, lng: myLng}
        debugger;
        const formAdd = [];
        // let formCity;

        this.geocoder.geocode({'location': myLatLng }, results => {
            debugger;
            for (var i = 0; i < results[0].address_components.length; i++) {
                var address = results[0].address_components[i];
                debugger;
                if (address.types[0] === "locality") {
                    formAdd.push(address.short_name)
                } else if (address.types[0] === "administrative_area_level_1") {
                    formAdd.push(address.short_name)
                }
            }
            const formCity = formAdd.join(", ");
            debugger;
            this.setState({ city: formCity });
        })
    }

    clearRoutes() {
        for (let i = 0 ; i < this.markers.length; i++) {
            this.markers[i].setMap(null)
        }
        this.markers = [];
        this.dirRend.setMap(null);
        this.dirRend = null;
        
        this.setState({ distance: 0 })
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        this.dirRend.setMap(this.map); 
    }


    undoMarker(e) {
        // debugger;
        e.preventDefault();
        this.markers.pop().setMap(null);
// debugger;
        if(this.markers.length > 0) {
            // this.showRoute({
            //     new google.maps.DirectionsService(), new google.maps.DirectionsRenderer({preserveViewport: true})
            // })
            this.showRoute(this.dirServ, this.dirRend);
        } else {
            this.clearRoutes();
        }
    }

    showRoute(dirServ, dirRend) {
        debugger;
        let start = this.markers[0].position;
        let finish = this.markers[this.markers.length-1].position;
        let waypoints = []
        for (let i = 1; i < this.markers.length - 1; i++) {
            waypoints.push({
                location: this.markers[i].position,
                stopover: false,
            });
        }

        this.setState({
            coordArr: this.markers.map((marker, idx) => {
                return ({
                    latitude: marker.position.lat(),
                    longitude: marker.position.lng(),
                    order: idx
                })
            })
        })

        const request = {
            origin: start,
            waypoints: waypoints,
            destination: finish,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
        };

        this.dirServ.route(request, (response, status) => {
            if (status === "OK") {
                this.dirRend.setDirections(response);

                //DirectionsLegs defins a single leg of journey
                //legs give access to object info of each leg.
                //ex. steps[] containers array of objects of each sep leg
                //distance indicates total distance of leg.
                let totalDistance = 0; //in METERS
                response.routes[0].legs.forEach((leg) => 
                //.value gives distance in meters
                    totalDistance += leg.distance.value);
                // let distanceInMiles = totalDistance * .000621371
                // this.setState({distance: (distanceInMiles.toFixed(2))})
                this.setState({ distance: (totalDistance * .000621371).toFixed(2)});
            }
            let dirs = this.dirRend.getDirections();
            const oPath = dirs.routes[0].overview_path;
            console.log(oPath);
            if (dirs !== null) {
                
        
                let routeMap=`https://maps.googleapis.com/maps/api/staticmap?size=75x75&markers=label:S%7C${oPath[0].lat()},${oPath[0].lng()}&markers=label:E%7C${oPath[oPath.length - 1].lat()},${oPath[oPath.length - 1].lng()}&path=color:0x8B008B|weight:2|enc:${dirs.routes[0].overview_polyline}&key=${window.googleAPIKey}&zoom=12`; 
        
                this.setState({ route_map: routeMap})
                debugger;
    
            }
        });

    }
    
    searchAutoComplete() {
        // this.marker.setVisible(false);
        let searchInput = document.getElementById('search-input');
        //built in google libraries function that has google api
        //auto complete user input addresses
        this.autoComplete = new google.maps.places.Autocomplete(searchInput);
        //developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        this.autoComplete.addListener('place_changed', this.searchUpdate);
    }

    searchUpdate() {
        let place = this.autoComplete.getPlace();
        // if (!place.geometry) {
        //     //User entered the name of place that was not suggested and
        //     //pressed the Enter Key.
        //     window.alert("No details available for input: '" + place.name + "'");
        // } else {
        //     this.setState({ location: place.formatted_address });
        // }
        if (place.geometry) {
            this.setState({ location: place.formatted_address });
        } else {
            const searchInput = document.getElementById('search-input');
            searchInput.value = '';
            alert('Address Not Found')
        }
    }

    // getElevationAlongPath = () => {
    //     if (this.markers.length > 1) {
    //         const ele = new window.google.maps.ElevationService();
    //         const latLngs = this.markers.map(marker => ({
    //             lat: marker.getPosition().lat(),
    //             lng: marker.getPosition().lng()
    //         }))
    //         const {distances } = latLngs.reduce(
    //             (acc, curr, i, arr) => {
    //                 if (i === arr.length-1) return acc;
    //                 const distances = acc.distances.concat(
    //                     calcDistance(
    //                         {lat: curr.lat, lng: curr.lng },
    //                         {lat: arr[i + 1].lat, lng: arr[i + 1].lng }
    //                     )
    //                 )
    //                 return distances
    //             },
    //             { distances: [] }
    //         )
    //         // API request to get our elevation samples:
    //         ele.getElevationAlongPath({
    //             path: latLngs,
    //             samples:100
    //         },
    //         results => {
    //             this.setState({
    //                 elevations: results.map(result => result)
    //             })
    //         }
                
    //         )
    //     }
    // }

    createRouteMap(directions) {
        // const route = directions.routes[0];
        const oPath = directions.routes[0].overview_path;

        let routeMap = `https://maps.googleapis.con/maps/api/staticmap?size=75x75&markers=label:S%7C${oPath[0].lat()},${oPath[0].lng()}&markers=label:E%7C${oPath[oPath.length - 1].lat()},${oPath[oPath.length-1].lng()}&path=color:0x8B008B|weight:2|enc:${directions.route[0].overview_polyline}&key=${window.googleAPIKey}`;

        this.setState({routeMap : routeMap})
    }

    update(field) {
        return e => this.setState({ 
            [field]: e.target.value })
    };


    locationMarkers() {
        
        let markersStr = "";
        this.state.coordArr.forEach(coordinate => {
            debugger;
            let lat = coordinate.latitude;
            let lng = coordinate.longitude;

            markersStr += `${lat},${lng},`;
        });
        debugger;
        return markersStr.slice(0, -1);
    }

    renderError(message) {
        debugger;
        let allErrors = this.props.errors.concat(this.state.errors)
        if (allErrors.includes(message)) {
            if (message === "Name can't be blank") {
                return (
                    <div>
                        <span>Name is required.</span>
                    </div>
                )
            } else if (message === "Activity can't be blank") {
                return (
                    <div>
                        <span>Activity is required.</span>
                    </div>
                )
            }
        }
    }

    newRouteParams() {
        

        // let encodeString = google.maps.geometry.encoding.encodePath(path);
        // this.setState({
        //     polyline: encodeString
        debugger;
        return {
            name: this.state.name,
            user_id: this.props.currentUser.id,
            activity: this.state.activity,
            route_map: this.state.polyline,
            distance: this.state.distance,
            city: this.state.city,
            route_map: this.state.route_map,
            location_markers: this.locationMarkers(),
            // location_ids: this.state.coordArr,
            // locationsArr: this.markers,
        }
    }

    createdDate() {
        let currentDate = new Date()
        let dString = currentDate.toString();
        let dSplit = dString.split(" ");

        let newDateTime = `${dSplit[1]}/${dSplit[2]}/${dSplit[3]}`

        this.setState({cDate: newDateTime})
    
    }

    renderErrors() {
        debugger;
        return (
            <ul className="display-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}> {error}</li>
                ))}
            </ul>
        );
    }

    saveRoute(e) {
        e.preventDefault();     
        debugger;
        
        this.createdDate();
        debugger;
            if (this.markers.length > 1) {
                this.props.createRoute(this.newRouteParams()).then(action => {
                    //     console.log();
                    // });
                        this.props.history.push(`/routes/view/${action.route.id}`)
                })
                // } else {

                // }

                // .then(this.props.history.push(`/routes/view/${this.props.route.id}`))
                // .then(this.props.history.push('/routes/my_routes'));
                
        } else {
            alert('Invalid Route. Please choose at least 2 waypoints.');
        }
        // // // .then(data => this.props.history.push(`/routes/view/${data.route.id}`))

        // this.props.history.push('/routes/my_routes')
    }


    render() {
        
        const errors = this.props.errors
        debugger;

        const ACTIVITIES = ["Choose an Actitivity",
            "Walk", "Winter Sport/Activity", "Bike Ride", "Swim",
            "Run", "Sport/ Other Activity", "Hike"
        ];
        debugger;

        // const routes = Object.values(this.props.routes);
        return (
            <>
                <RouteNavContainer />
                <div className="routes-map">
                    <div className="routes-main">
                        <div className="routes-title-1">
                            {/* <h2 className="routes-title-1-1">MY ROUTES</h2> */}
                            <form id="search-bar" onSubmit={this.updateCenter}>
                                {/* <div className="errors">{this.renderErrors()}</div> */}
                                <label id="search-label">Choose a map location
                                    <div>
                                        <input
                                            type="search"
                                            className="search-form-input"
                                            id="search-input"
                                            value={this.state.location}
                                            onChange={this.update('location')}
                                            placeholder="Address"
                                        />
                                    <button
                                        type="submit"
                                        className="location-search">SEARCH</button>
                                        </div>
                                </label>
                            </form>
                            <span id="route-header">Route Details</span>
                            <form className="route-details" onSubmit={this.saveRoute}>
                                <div id="route-details-1">
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update("name")}
                                        placeholder="Name this map"
                                    />
                                    <span>*</span>
                                </div>
                                <div className="errors">{this.renderError("Name can't be blank")}</div>
                                <div id="route-details-2">
                                    <select value={this.state.activity}
                                        className="optA"
                                        onChange={this.update("activity")}>
                                        {ACTIVITIES.map(activity =>
                                            <option key={`activity-${activity}`} value={activity}>{activity}</option>)}
                                    </select>
                                    <span>*</span>
                                </div>
                                <div className="errors">{this.renderError("Activity can't be blank")}</div>
                                {/* <div id="route-created-date">
                                    <input id="create-date"
                                        type="button"
                                        value="GET DATE"
                                        onClick="createTime();"
                                        placeholder="GET DATE"
                                        />

                                </div> */}
                                <div id="save-routes">
                                    <span id="save-routes-1">Save to Routes</span>
                                    <button
                                        onClick={()=> {
                                            this.getCity;
                                            this.saveRoute;
                                        }}
                                        className="create-route-btn"
                                        id="route-submit">SAVE ROUTE</button>
                                </div>
                            </form>
                            <span id="route-footer">No Advertisements</span>

                        </div>
                    </div>
                    <div id="map-main">
                        <div id="map-container" ref="map">
                                {/* style={{width:'100%', height:'100%'}}> */}
                        </div>
                        <div id="map-tools">
                            <div id="map-tools-distance">
                                <label>DISTANCE</label>
                                <h2>{this.state.distance} MI </h2>
                            </div>
                            <div id="map-tools-control">
                                <button onClick={this.undoMarker}><i id="first" className="fas fa-undo fa-2x"></i><br/> UNDO</button>
                                <button onClick={this.clearRoutes}><i id="second" className="fas fa-times fa-2x"></i><br/>CLEAR</button>
                                <button onClick={this.updateCenter2}><i id="third" className="fas fa-compress-arrows-alt fa-2x"></i><br/>CENTER</button>
                            </div>

                            {/* <select value={this.state.activity}
                                className="optA"
                                onChange={this.update("activity")}>
                                {ACTIVITIES.map(activity =>
                                    <option key={`activity-${activity}`} value={activity}>{activity}</option>)}
                            </select> */}

                            <div id="map-tools-control2" data-toggle="buttons">
                                <div class="btn btn-primary active">
                                    <input type="radio" onChange={this.update("activity")} name="activity" id="activity1" value="WALK" checked/>
                                    <i className="fas fa-walking fa-2x"></i><br/>WALK
                                </div>
                                <div class="btn btn-primary">
                                    <input type="radio" name="activity" id="activity2" value="HIKE"/>
                                    <i className="fas fa-hiking fa-2x"></i><br/>HIKE
                                </div>
                                <div class="btn btn-primary">
                                    <input type="radio" name="activity" id="activity3" value="BIKE" />
                                    <i className="fas fa-biking fa-2x"></i><br/>BIKE
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* <SmallMapContainer 
                        routeData={this.state}
                    /> */}
                    
                    {/* userRoutes */}
                </div>
            </> 
        )
    }
}

export default RouteMap;