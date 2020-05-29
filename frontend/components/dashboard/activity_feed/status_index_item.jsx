import React from 'react';
import CommentIndexContainer from './comment_index_container';
import CommentContainer from './comment_container';


class StatusIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

        this.creationDate = "";
        this.deleteStatus = this.deleteStatus.bind(this)
    }

    createdDate() {
        debugger;
        const createdDate = this.props.status.createdAt.split('-');
        const cDate = `${createdDate[1]}/${createdDate[2].slice(0, 2)}/${createdDate[0]}`;

        this.creationDate = cDate;
    }

    deleteStatus() {
        debugger;
        this.props.deleteStatus(this.props.status.id)
    }

    render() {
        debugger;
        this.createdDate();
        if (!this.props.status) return null;
        let deleteButton;
        if (this.props.user.id === this.props.status.authorId) {
            deleteButton = <button
                onClick={this.deleteStatus}><i className="fas fa-times"></i>
                    </button>
        } else {
            deleteButton = ""
        }

        const buttonText = this.state.visible ? <i className="far fa-comment-alt"></i> : <i className="far fa-comment-alt"></i>

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
                        <div id="status-body-2">
                            <div id="status-comment-create">
                                
                                <button onClick={() => {
                                this.setState({ visible: !this.state.visible});
                                }}
                                >
                                <i className="far fa-comment-alt"></i>
                                </button>
                            </div>
                            
                            <div id="status-createdAt">
                                <i class="fas fa-globe-americas"></i> |
                                <div id="status-date">
                                 {this.creationDate}
                                </div>
                            </div>
                        </div>
                        <div id="status-comments">
                            {this.state.visible ? <CommentIndexContainer 
                            status={this.props.status}
                            /> : null}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </>
        )
    }
}

export default StatusIndexItem;