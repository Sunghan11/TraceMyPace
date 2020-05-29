import React from 'react';
import CommentContainer from './comment_container';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchComments(this.props.status.id);
    }

    render () {
        debugger;
        
        return (
            <>
                <div className="comments-index-container">
                    <div id="comments-index-items">
                        {this.props.comments.map(comment => {
                            if (comment.statusId === this.props.status.id)
                            return <CommentIndexItem
                                comment={comment}
                                user={this.props.currentUser}
                                key={comment.id}
                                deleteComment={this.props.deleteComment}
                            />

                        })}
                    </div>
                    <div id="comment-index-create">
                        <CommentContainer 
                        status={this.props.status}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default CommentIndex;