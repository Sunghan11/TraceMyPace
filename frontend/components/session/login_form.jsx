import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }

        // this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    } 

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user);
    }

    renderErrors() {
        if (this.props.errors.session) {
            return (
                <ul>
                    {this.props.errors.map((error) => (
                        <li>{error}</li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        
        const link = this.props.formType === 'Sign Up' ? <Link to="/login">LOG IN</Link> : <Link to="/signup">SIGN UP</Link>

        return (
        

            <div className="login-page">
                <div className="login-form">
                    <div id="navLink">{link}</div>
                    <div className="errors-session">{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label"></label>
                            <input
                                value={this.state.email}
                                onChange={this.update("email")}
                                type="text"
                                placeholder="Email" />

                        </div>

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input
                                value={this.state.password}
                                onChange={this.update("password")}
                                type="password"
                                placeholder="Password" />

                        </div>
                
                        <div className="session-form">
                            <button className="btn btn-primary btn-lg">
                                SIGN UP
                            </button>
                        </div>


                    </form>
                </div>
            </div>

        )
    }
}

export default LogInForm;

// // First name | Last name | Email | Password | Day, Month, Year | Male, Female | Location |