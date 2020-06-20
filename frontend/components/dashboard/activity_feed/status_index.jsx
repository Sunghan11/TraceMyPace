import React from 'react';
import StatusIndexItem from './status_index_item';
import StatusContainer from './status_container';


class StatusIndex extends React.Component {
    constructor(props) {
        super(props);


        this.totalDistance = 0;
    }

    componentDidMount() {
        this.props.fetchStatuses();
        this.props.fetchRoutes();
        // this.props.fetchComments();
    }

    render() {


        debugger;
        return (
            <div className="status-index-container">
                <div className="status-index">
                    <div id="status-index-icon">
                        <img src={window.avatarURL} />
                    </div>
                    <StatusContainer />
                </div>
                <br/>
                <div className="status-line"></div>
                <div></div>
                <br/>
                <br/>
                <div id="status-items">
                    {this.props.statuses.slice(0).reverse().map(status => {
                        debugger;
                        if (status.authorId === this.props.currentUser.id) {
                            return <StatusIndexItem
                                status={status}
                                
                                user={this.props.currentUser}
                                key={status.id}
                                deleteStatus={this.props.deleteStatus}
                            />
                        }
                    })}
                </div>
                            
            </div>
        )
    }
}

export default StatusIndex;