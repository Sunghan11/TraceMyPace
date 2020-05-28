import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
           this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        e.preventDefault();

        if (this.state.body.length > 0) {
            const stat = {
                body: this.state.body,
                author_id: this.props.user.id,
            }
            this.props.createStatus(stat)
            this.setState({ //reset
                body: ""
            })

        }
    }

    render() {
        debugger;
        return (
            <form id="status-form" onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder={`Add a status update here...`}
                    />
                <button type="submit">POST</button>
            </form>
        )
    }
}


export default Status;