import React from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES from './country_list';
import UserNav from '../nav/user_nav';

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
        }
        
        // this.errors = {};

        // this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        // this.handleDemoLogin = this.handleDemoLogin(this);

    }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // } 

    handleDemoLogin() {
        // debugger;
        this.props.login(this.props.demoUser)
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value})
        )
    };

    // handleDemoLogin(e) {
    //     e.preventDefault();
    //     const user = {email: "testUser@gmail.com", password: "password" }
    //     this.props.demoLogin(user)
    // }

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

    // componentDidMount(){
    //     this.props.removeErrors(this.props.errors);
    // }



    renderErrors() {
        // debugger;
            return (
                <ul>
                    {this.props.errors.map((error) => (
                        <li> {error}</li>
                    ))}
                </ul>
            );
    }

    render () {
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
            <UserNav />
            <div className="signup-page">
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                    <div className="errors">{this.renderErrors()}</div>
                    {/* <div className="navLink">{link}</div> */}
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

                        <div className="form-group">
                            <label className="control-label"></label>
                            <input className="input-group"
                                value={this.state.last_name}
                                onChange={this.update("last_name")}
                                type="text"
                                placeholder="Last Name" />
                        </div>

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
                            <div className="birth-date">
                                <div className="day-group">
                                    <div className="date-selectors">
                                        <select className="optC" onChange={this.update("day")}>
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