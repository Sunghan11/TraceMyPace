import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: 0
        }
        debugger;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();

        if(this.state.body.length > 0) {
            const comment = {
                body: this.state.body,
                author_id: this.props.user.id,
            }
            this.props.createComment(comment)
            this.setState({ //reset
                body: ""
            })

        }
        debugger;

    }

    render() {
        return (
            <div id="comments-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="comment-input" 
                        type="text" 
                        value={this.state.body} 
                        onChange={this.update("body")}
                    />
                    <input 
                        id="comment-container-submit"
                        type="submit"
                        value="POST"
                    />
                </form>
            </div>
        )
    }
}

export default Comment
