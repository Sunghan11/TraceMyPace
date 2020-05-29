import React from 'react';


class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.creationDate = "";
        this.deleteComment = this.deleteComment.bind(this)
    }

    createdDate() {
        const createdDate = this.props.comment.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0, 2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }

    deleteComment() {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        debugger;
        this.createdDate();
        if (!this.props.comment) return null;
        let deleteButton;
        if (this.props.user.id === this.props.comment.authorId) {
            deleteButton = <button 
                        onClick={this.deleteComment}>Delete
                    </button>
        } else {
            deleteButton = ""
        }

        return (
            <div className="comment-index-item-container">
                <div id="comment-index-profile-pic">
                    <img src={window.avatarURL} />
                </div>
                <div id="comment-index-right">
                    <div id="comment-top">
                        <div id="comment-author">
                            {this.props.user.first_name} {this.props.user.last_name}
                        </div>
                        <div id="comment-top-right">
                            <div id="comment-delete">
                                {deleteButton}
                            </div>
                            |
                            <div id="comment-createdAt">
                                {this.creationDate}
                            </div>
                        </div>
                    </div>
                    <div id="comment-body">
                        {this.props.comment.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;