import React from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './delete_modal';


class RouteIndexItem extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            modalOpen: false
        }

        this.creationDate = "";
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // this.handleDeleteRoute = this.handleDeleteRoute.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.props.deleteRoute = this.props.deleteRoute.bind(this);
    }

    showModal() {
        this.setState({ modalOpen: true });
    }

    hideModal() {
        this.setState({ modalOpen: false });
    }

    // createdDate() {
    //     let currentDate = new Date()
    //     let dString = currentDate.toString();
    //     let dSplit = dString.split(" ");
        
    //     let newDateTime = `${dSplit[1]}/${dSplit[2]}/${dSplit[3]}` 

    //     return newDateTime;
    // }

    // handleDeleteRoute(e) {
    //     debugger;
    //     const { deleteRoute, route } = this.props
    //     return (e => {
    //         e.preventDefault();
    //         deleteRoute(route.id)
    //     });

    // }

    createdDate() {
        const createdDate = this.props.route.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0,2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }

    handleClick() {
        this.props.deleteRoute(this.props.route.id)
        // this.props.history.push("/routes/my_routes")
    }

    render () {

        // const _deleteRoute = this.props.deleteRoute;
        // const routeId = this.props.route.id
        debugger;
        this.createdDate();

        if (!this.props.route) {
            return null;
        }       
        return (
            <tr>
                <td className="route-tag" id="route-tag-map">
                    <Link to={`/routes/view/${this.props.route.id}`}>
                        {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=color:0x0000FF80|weight:5|enc:${this.props.route.route_map}key=${window.googleAPIKey}`}/> */}
                        <img className="index-map" src={this.props.route.routeMap} />
                    </Link>
                </td>
                <td className="route-tag" id="route-tag-created">
                    <Link to={`/routes/view/${this.props.route.id}`}>
                        <span>{this.creationDate}</span>
                    </Link>
                </td>
                <td className="route-tag" id="route-tag-distance">
                    {(this.props.route.distance).toFixed(2)} miles
                </td>
                <td className="route-tag" id="route-tag-name">
                    <Link to={`/routes/view/${this.props.route.id}`}>
                    {this.props.route.name}
                    </Link>
                </td>
                <td className="route-tag" id="route-tag-city">
                    {this.props.route.city}
                </td>
                <td className="route-tag" id="route-tag-friends">
                    <i className="fas fa-user-friends"></i>
                </td>
                <td className="route-tag" id="route-tag-delete">
                    <a onClick={this.showModal}>
                        <span><button id="route-delete-button">DELETE</button></span>
                    </a>
                    <DeleteModal
                        show={this.state.modalOpen}
                        deleteRoute={this.handleClick}
                        hide={this.hideModal}    
                    />
                </td>
            </tr>
        )
    }
}

export default RouteIndexItem;