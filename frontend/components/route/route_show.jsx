import React from 'react';
import {Link} from 'react-router-dom';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (!this.props.route) {
            this.props.fetchRoute(this.props.match.params.routeId)
        }
    }

    handleClick() {
        this.props.deleteRun(this.props.route.id)
        this.props.history.push('/routes/my_routes')
    }

    render () {
        const route = this.props.route;
        // const person = {first_name = "",
        return (
            <div className="route-show-main">
                <div className="route-show-info">
                    <div id="route-show-username">Name</div>
                    <div id="route-show-info-info">
                        {/* <span>{this.props.route.activity}</span> */}
                        <span>{this.props.route.city}</span>
                        <span>{this.props.route.distance}</span>
                    </div>
                    <h1>{route.name}</h1>
                </div>
                <section id="route-show-map">
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=1320x600&path=color:#bf00ff|weight:5|enc:${props.route.route_map}key=${window.googleAPIKey}`}/>
                </section>
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
        )
    }
}

export default RouteShow;


    //     this.markers=[];
    //     this.map=null;
    //     this.dirServ = new google.maps.DirectionsService();
    //     this.dirRend = new google.maps.DirectionsRenderer({
    //         supressMarkers: true,
    //         polylineOptions: {
    //             strokeColor: '#8B008B',
    //             strokeWeight: 4,
    //         },
    //     });    
    // }
