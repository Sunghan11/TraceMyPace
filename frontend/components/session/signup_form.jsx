import React from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES from './country_list';
import UserNavContainer from '../nav/user_nav_container';
import SessionNav from '../nav/session_nav';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birth_date: '',
            gender: '',
            location: "United States",
            // touched: {
            // first_name: false,
            // last_name: false,
            // email: false,
            // password: false,
            // birth_date: false,
            // gender: false,
            // location: false,
            // }
        }
        // debugger;
        // this.props.errors = [];
        this.errors = {};
        // this.renderError = this.renderError.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        // this.renderError = this.renderError.bind(this);

    }


    handleDemoLogin() {
        // debugger;
        this.props.login(this.props.demoUser)
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value})
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            birth_date: this.state.month + ' ' + this.state.day + ' ' + this.state.year,
            gender: this.state.gender,
            location: this.state.location
        });

        this.props.submitForm(user);
    }

    componentDidMount(){
     return this.props.clearErrors();
    }



    renderError(message) {
        // let allErrors = [];
        // let allErrors = this.props.errors;
        // if(this.state.errors)
        // if (this.props.errors.length > 0) {
        //     allErrors = this.props.errors.concat(this.state.errors)
        // }
        // }
        // debugger;
        let allErrors = this.props.errors.concat(this.state.errors);
        
    // }
        // debugger;
        if (allErrors.includes(message)) {
            if (message === "First name can't be blank") {
                return (
                    <div>
                        <span>First name is required.</span>
                    </div>
                )
            } else if (message === "Last name can't be blank") {
                return (
                    <div>
                        <span>Last name is required.</span>
                    </div>
                )
            } else if (message === "Email can't be blank") {
                return (
                    <div>
                        <span>Email is required.</span>
                    </div>
                )
            } else if (message === "Email has already been taken") {
                return (
                    <div>
                        <span> Email has already been registered.</span>
                    </div>
                )
            } else if (message === "Password is too short (minimum is 6 characters)") {
                // debugger;
                if (this.state.password.length > 0){
                    return (
                        <div>
                            <span>Password must be at least 6 characters in length.</span>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <span>Password is required.</span>
                        </div>
                    )
                }
            } else if (message === "Gender is not included in the list") {
                return (
                    <div>
                        <span>Gender is required</span>
                    </div>
                )
            } else if (this.state.birth_date === "") {
                return (
                    <div>
                        <span>Birthdate required.</span>
                    </div>
                )    
            }
        }
    }

    renderLocationErr () {
        if(this.state.location === "Country") {
            return (<span>Country is required.</span>)
        }
    }

    // renderLocationErr () {
    //     if (this.state.location === "") {
    //         return(<span>Country is require.</span>)
    //     }
    // }




    renderErrors() {
        // debugger;
            return (
                <ul className="display-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}> {error}</li>
                    ))}
                </ul>
            );
    }

    render () {
        // debugger;
        const MONTHS = ["Month",
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        const DAYS = ["Day"];
        for (let i = 1; i < 32; i++) {
            DAYS.push(i);
        };

        const YEARS = ["Year"];
        for (let i = (new Date().getFullYear() - 12); i >= 1900; i--) {
            YEARS.push(i)
        }

        
        const link = this.props.formType === 'Sign Up' ? <Link to="/login">LOG IN</Link> : <Link to="/signup">SIGN UP</Link>

        // if (this.props.formType === 'Log in') {
        return (
            <>
            <SessionNav />
            <div className="signup-page">
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                    {/* <div className="errors">{this.renderErrors()}</div> */}
                    <Link className="login-link" to="/login">LOG IN</Link>
                    <br/>
                    <br/>
                    <br/>
                        <button onClick={this.handleDemoLogin}>
                            <div className="demoUser">SIGN IN AS DEMO USER</div>
                        </button> 
                            <br />
                            <br />
                    <div className="dashed">
                        <span>OR</span>
                    </div>
                    <br/>
                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.first_name}
                                onChange={this.update("first_name")}
                                type="text"
                                placeholder="First Name" />
                        </div>
                            <div className="errors">{this.renderError("First name can't be blank")}</div>

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.last_name}
                                onChange={this.update("last_name")}
                                type="text"
                                placeholder="Last Name" />
                        </div>
                            <div className="errors">{this.renderError("Last name can't be blank")}</div>

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.email}
                                onChange={this.update("email")}
                                type="text"
                                placeholder="Email" />
                        </div>
                            <div className="errors">{this.renderError("Email can't be blank")}</div>
                            <div className="errors">{this.renderError("Email has already been taken")}</div>

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.password}
                                onChange={this.update("password")}
                                type="password"
                                placeholder="Password" />
                        </div>
                            <div className="errors">{this.renderError("Password is too short (minimum is 6 characters)")}</div>



                        <div className="form-group">
                            <div className="birth-date">
                                <div className="day-group">
                                    <div className="date-selectors">
                                        <select className="optC" onChange={this.update("day") }>
                                            {DAYS.map(day => 
                                            <option key={day} value={day}>{day} </option>)}
                                        </select>
                                        <img src={window.downArrow} />
                                    </div>
                                </div>
                                <div className="month-group">
                                    <div className="date-selectors">
                                        <select className="optC" onChange={this.update("month")}>
                                            {MONTHS.map(month => 
                                            <option key={month} value={month}>{month}</option>)}
                                        </select>
                                        <img src={window.downArrow} />
                                    </div>
                                </div>
                                <div className="year-group">
                                    <div className="date-selectors">
                                        <select className="optC" onChange={this.update("year")}>
                                            {YEARS.map(year => 
                                            <option key={year} value={year}>{year}</option>)}
                                        </select>                                     
                                        <img src={window.downArrow} />
                                    </div>
                                </div>
                            </div>
                                
                                <div className="errors">{this.renderError()}</div>

                        </div>

                        <div className="form-group">
                            <label className="control-label"></label>
                                <div className="gender-button">
                                    <input id="optM" 
                                        value="Male"
                                        checked={this.state.gender === "Male"}
                                        onChange={this.update("gender")}
                                        type="radio" 
                                    />
                                    <label htmlFor="optM" className="radio">
                                        <span className="gen-text">Male</span>
                                        <div>✔</div>
                                    </label>

                                    <input id="optF"
                                        value="Female"
                                        checked={this.state.gender === "Female"}
                                        onChange={this.update("gender")}
                                        type="radio"
                                    />
                                    <label htmlFor="optF" className="radio">
                                        <span className="gen-text">Female</span>
                                        <div>✔</div>
                                    </label>
                                </div>
                                <div className="errors">{this.renderError("Gender is not included in the list")}</div>
                        </div>

                        <div className="form-group">
                            <label className="control-label">
                                <div className="country-group">
                                    <select value={this.state.location} className="optC"
                                        onChange={this.update("location")}>
                                        {COUNTRIES.map(location =>
                                            <option key={location} value={location} >{location}</option>)}
                                    </select>
                                    
                                    <img src={window.downArrow} />
                                </div>
                            </label>
                                <div className="errors">{this.renderLocationErr()}</div>
                        </div>

                        <div className="statement">
                            <label className="checkbox-label">
                                <input type="checkbox" defaultChecked/>
                                <span className="checkbox-custom"></span>
                            </label>
                            <p className="word-of-mouth">
                                Yes, I would like to receive by word of mouth the latest news, innovation updates, and offers from TraceMyPace. NOT guaranteed.
                            </p>
                        </div>

                        <p className="privacy-policy">
                            By signing up with TraceMyPace, you agree to the <span className="blue-text">Terms of Use</span>... be <span className="blue-text">Nice</span>.
                        </p>

                        <div className="session-form">
                            <input className="signup-button"
                                type="submit"
                                value="SIGN UP" />
                        </div>
                        

                    </form>
                </div>
            </div>
        </>
            
        )
    }
}
export default SignUpForm;

// First name | Last name | Email | Password | Day, Month, Year | Male, Female | Location |