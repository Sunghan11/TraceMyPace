import React from 'react';
import CommentContainer from './comment_container';
import StatusIndexItem from './status_index_item';
import StatusContainer from './status_container';
import UserNavContainer from '../../nav/user_nav_container';
import { NavLink } from 'react-router-dom';
import Footer from '../../footer/footer';

class StatusIndex extends React.Component {

    componentDidMount() {
        this.props.fetchStatuses();
        this.props.fetchComments();
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
                    {this.props.statuses.map(status => {
                        // if (status.author_id === this.props.currentUser.id) {
                            return <StatusIndexItem
                                deleteStatus={this.props.deleteStatus}
                                status={status}
                                user={this.props.currentUser}
                                key={`status-${status.id}`}
                            />
                    // }
                    })}
                </div>
                            
            </div>
        )
    }
}

export default StatusIndex;