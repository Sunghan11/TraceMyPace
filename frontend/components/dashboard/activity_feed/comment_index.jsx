import React from 'react';
import CommentContainer from './comment_container';
import CommentIndexItem from './comment_index_item';
import UserNavContainer from '../../nav/user_nav_container';
import {NavLink} from 'react-router-dom';
import Footer from '../../footer/footer';

class CommentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render () {
   
        
        return (
            <>
                <div className="comments-index-container">
                    <div id="comments-index-title">
                        Comments
                    </div>
                    <div id="comments-index-items">
                        {/* {this.props.comments.map(comment => {
                            return <CommentIndexItem
                                comment={comment}
                                user={this.props.user}
                                deleteComment={this.props.deleteComment}
                                key={`comment ${comment.id}`}
                            />

                        })} */}
                    </div>
                    <div id="comment-index-create">
                        <CommentContainer />
                    </div>
                </div>
            </>
        )
    }
}

export default CommentIndex;