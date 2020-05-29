import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.user.id,
            status_id: this.props.status.id
        }
        debugger;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillMount() {
    //     this.setState({
    //         body: "",
    //     })
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();

        if(this.state.body.length !== "") {
            this.props.createComment(this.state)
            this.setState({ //reset
                body: ""
            })

        }
        debugger;
    }

    render() {
        return (
            <form id="comment-form" onSubmit={this.handleSubmit}>
                <img src={window.avatarURL} />
                <textarea   
                    value={this.state.body} 
                    onChange={this.update("body")}
                    placeholder={`Write a comment...`}
                />
                <button type="submit">POST</button>
            </form>
        )
    }
}

export default Comment
