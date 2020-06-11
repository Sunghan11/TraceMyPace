import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';


class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger;

        this.totalDistance = 0;

        this.deleteRoute = this.deleteRoute.bind(this);
        this.updateRoute = this.updateRoute.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoutes()
        // this.props.fetchLocations()
    }

    componentWillMount() {
        this.props.fetchRoutes();
    }

    updateRoute() {
        this.props.history.push(`routes/edit/${this.props.route.id}`)
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value})
        )
    };

    deleteRoute() {
        this.props.deleteRoute(this.props.route.id)
    }

    render () {
        debugger;

        const routes = Object.values(this.props.routes);
        const currentUser = Object.values(this.props.currentUser)[0];


        routes.forEach((route) => {
            this.totalDistance += route.distance
        })
        return (
            <>  
                <UserNavContainer />
                <div className="route-index">
                    <div id="route-create">
                        <h1>My Routes</h1>
                        <Link to="/routes/create/"><button id="route-create-route">CREATE A ROUTE</button></Link>
                    </div>
                    <table id="route-table">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Created</th>
                                <th>Distance</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Privacy</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.slice(0).reverse().map(route => {
                                debugger;
                                if (route.userId === currentUser.id)
                                return <RouteIndexItem
                                    route={route}
                                    key={route.id}
                                    deleteRoute={this.props.deleteRoute} />
                            })}
                            {/* {this.props.routes.map( route => {
                                if (route && route.user_id === this.props.user) {
                                    return <RouteIndexItem route={route} key={`route-${route.id}`}/>
                                }
                            })} */}
                        </tbody>
                    </table>
                    {/* <div id="route-index-route">
                        <span>Route</span>
                    </div>
                    <div id="route-index-created">
                        <span>Created</span>
                    </div>
                    <div id="route-index-distance">
                        <span>Distance</span>
                    </div>
                    <div id="route-index-name">
                        <span>Name</span>
                    </div>
                    <div id="route-index-city">
                        <span>City</span>
                    </div> */}


                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
            </>
        )
    }
}

export default RouteIndex