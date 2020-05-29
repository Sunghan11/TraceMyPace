import React from 'react';
import { Link } from 'react-router-dom';
import SessionNav from '../nav/session_nav';

class LogInForm extends React.Component {
    constructor(props) {
        // debugger;
        super(props)
        this.state = {
            email: '',
            password: '',

        }

        // this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        // this.props.errors = [];
        this.errors ={};
    }




    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    componentDidMount() {
        return this.props.removeErrors();
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user);
    }

    handleDemoLogin() {
        // debugger;
        this.props.submitForm(this.props.demoUser)
    }


    // renderError(message) {
    //     let allErrors = this.props.errors.concat(this.state.errors)
    //     if (allErrors.includes(message)) {
    //         if (message === "Email can't be blank") {
    //             return (
    //                 <div>
    //                     <span>Email is required.</span>
    //                 </div>
    //             )
    //         } else if (message === "Incorrect username or password. Please try again") {
    //             // debugger;
    //             if (this.state.password.length > 0) {
    //                 return (
    //                     <div>
    //                         <span>Incorrect username or password. Please try again.</span>
    //                     </div>
    //                 )
    //             } else {
    //                 return (
    //                     <div>
    //                         <span>Password is required.</span>
    //                     </div>
    //                 )
    //             }
    //         }
    //     }
    // }
    renderErrors() {
        // debugger;
        
        // if (this.props.errors) {
        return (
            <ul className="display-errors">
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}> {error}</li>
                ))}
            </ul>
        );
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }
    

    render() {
        
        // const link = this.props.formType === 'Sign Up' ? <Link to="/login">LOG IN</Link> : <Link to="/signup">SIGN UP</Link>

        return (      
            <>
                <SessionNav />
            <div className="login-page">
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                    <Link className="signup-link" to="/signup">SIGN UP</Link>
                    <br />
                    <br />
                    <br />
                        <button onClick={this.handleDemoLogin}>
                            <div className="demoUser2">SIGN IN AS DEMO USER</div>
                        </button>
                        <br />
                        <br />
                        <div className="dashed">
                            <span>OR</span>
                        </div>
                    <div className="errors-session">{this.renderErrors()}</div>
                        
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
                        <span className="forgot-password">Please do not forget your password</span>
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