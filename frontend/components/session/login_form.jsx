import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../nav/user_nav';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }

        // this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);

    }



    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    componentDidMount() {
        return this.props.clearErrors();
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user);
    }

    handleDemo(e) {
        const user = {email: ""}
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error) => (
                    <li> {error}</li>
                ))}
            </ul>
        );
    }

    render() {
        
        // const link = this.props.formType === 'Sign Up' ? <Link to="/login">LOG IN</Link> : <Link to="/signup">SIGN UP</Link>

        return (      
            <>
                <UserNav />
            <div className="login-page">
                <div className="login-form">
                    <div className="errors-session">{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit}>
                    <Link className="signup-link" to="/signup">SIGN UP</Link>
                    <br />
                    <br />
                        
                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.email}
                                onChange={this.update("email")}
                                type="text"
                                placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.password}
                                onChange={this.update("password")}
                                type="password"
                                placeholder="Password" />
                        </div>
                        
                        <div className="form-group">
                        <span className="forgot-password">Forgot Something? Too bad.</span>
                        </div>
                
                        <div className="session-form">
                            <input className="login-button"
                                type="submit"
                                value="LOG IN" />
                        </div>

                    </form>
                </div>
            </div>
            </>

        )
    }
}

export default LogInForm;

// // First name | Last name | Email | Password | Day, Month, Year | Male, Female | Location |