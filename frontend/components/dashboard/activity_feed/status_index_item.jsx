import React from 'react';
import CommentContainer from './comment_container';


class StatusIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.creationDate = "";
        this.handleClick = this.handleClick.bind(this)
    }

    createdDate() {
        debugger;
        const createdDate = this.props.status.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0, 2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }

    handleClick() {
        debugger;
        this.props.deleteStatus(this.props.status.id)
    }

    render() {
        if (!this.props.status) return null;
        let deleteButton;
        if (this.props.user.id === this.props.status.authorId) {
            deleteButton = <button
                onClick={this.handleClick}><i className="fas fa-times"></i>
                    </button>
        } else {
            deleteButton = ""
        }

        return (
            <>
                <div className="status-index-item-container">
                    <div id="status-index-profile-pic">
                        <img src={window.avatarURL} />
                    </div>
                    <div id="status-index-right">
                        <div id="status-top">
                            <div id="status-author">
                                {this.props.user.first_name} {this.props.user.last_name}
                            </div>
                            <div id="status-delete">
                                {deleteButton}
                            </div>
                        </div>
                        <div id="status-body">
                            {this.props.status.body}
                        </div>
                        <div id="status-createdAt">
                            {this.creationDate}
                        </div>
                        <div id="status-comments">
                            <CommentContainer />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default StatusIndexItem;