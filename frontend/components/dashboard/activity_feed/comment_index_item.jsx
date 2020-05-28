import React from 'react';


class CommentIndexItem extends React.Component {
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
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        if (!this.props.comment) return null;
        let deleteButton;
        if (this.props.user.id === this.props.comment.authorId) {
            deleteButton = <button 
                        onClick={this.handleClick}>Delete
                    </button>
        } else {
            deleteButton = ""
        }

        return (
            <div className="comment-index-item-container">
                <div id="comment-author">
                    {this.props.comment.first_name} {this.props.comment.last_name}
                </div>
                <div id="comment-body">
                    {this.props.comment.body}
                </div>
                <div id="comment-delete">
                    {deleteButton}
                </div>
                <div id="comment-createdAt">
                    {this.creationDate}
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;