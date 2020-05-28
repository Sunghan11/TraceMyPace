import React from 'react';
import CommentContainer from './comment_container';


class StatusIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.creationDate = "";
        this.handleClick = this.handleClick.bind(this)
    }

    createdDate() {
        const createdDate = this.props.route.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0, 2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }

    handleClick() {
        this.props.deleteStatus(this.props.status.id)
    }

    render() {
        if (!this.props.status) return null;
        let deleteButton;
        if (this.props.user.id === this.props.status.authorId) {
            deleteButton = <button
                onClick={this.handleClick}>Delete
                    </button>
        } else {
            deleteButton = ""
        }

        return (
            <>
            <div className="status-index-item-container">
                <div id="status-author">
                    {this.props.status.first_name} {this.props.status.last_name}
                </div>
                <div id="status-body">
                    {this.props.status.body}
                </div>
                <div id="status-delete">
                    {deleteButton}
                </div>
                <div id="status-createdAt">
                    {this.creationDate}
                </div>
            </div>
            <section id="status-comments">
                <CommentContainer />
            </section>
            </>
        )
    }
}

export default StatusIndexItem;