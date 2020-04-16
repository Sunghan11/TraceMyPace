import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';


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
                <div>
                    <div id="route-index-route">
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
                    </div>
                <


                </div>
            </>
        )
    }
}

export default RouteIndex