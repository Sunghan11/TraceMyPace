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

        return (
            <div className="status-index">
                <div id="status-index-icon">
                    <img src={window.avatarURL} />
                </div>
                <StatusContainer />

                <div id="status-items">
                    {this.props.statuses.map(status => {
                        if (status.author_id === this.props.user.id) {
                            return <StatusIndexItem
                                status={status}
                                user={this.props.currentUser}
                                key={`stat${status.id}`}
                            />
                        }
                    })}
                </div>
                        
            </div>
        )
    }
}

export default StatusIndex;