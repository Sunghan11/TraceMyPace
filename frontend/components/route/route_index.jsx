import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';
import UserNav from '../nav/user_nav';
import Footer from '../footer/footer';


class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value})
        )
    };

    render () {

        const routes = Object.values(this.props.routes);
        return (
            <>  
                <UserNav />
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
                            {routes.map(route => (
                                <RouteIndexItem
                                    route={route}
                                    key={route.id}
                                    deleteRoute={this.props.deleteRoute} />
                            ))}
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