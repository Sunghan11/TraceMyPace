import React from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES from './country_list';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birth_date: '',
            gender: '',
            location: '',
        }

        // this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // } 

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
        //     <div className="session-form">
        //         <div id="navLink">{link}</div>
        //         <div className="errors-session">{this.renderErrors()}</div>
        //         <form onSubmit={this.handleSubmit}>
        //             <div className="form-group">
        //                 <label className="control-label"></label>
        //                 <input
        //                     value={this.state.email}
        //                     onChange={this.update("email")}
        //                     type="text"
        //                     placeholder="Email" />

        //             </div>

        //             <div className="form-group">
        //                 <label className="control-label"></label>
        //                 <input
        //                     value={this.state.password}
        //                     onChange={this.update("password")}
        //                     type="password"
        //                     placeholder="Password" />

        //             </div>
        //         </form>
        //     </div>
        // } else {
            <div className="signup-page">
                <div className="signup-form">
                    <div className="errors-session">{this.renderErrors()}</div>
                    <form onSubmit={this.handleSubmit}>
                    {/* <div className="navLink">{link}</div> */}
                    <Link className="login-link" to="/login">LOG IN</Link>
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
                            {/* <label className="control-label"></label>
                            <input
                                value={this.state.birth_date}
                                onChange={this.update("birth_date")}
                                type="date"
                                placeholder="Birth Date" /> */}
                            <label className="birth-date">
                                <select onChange={this.update("month")}>
                                    {MONTHS.map(month => 
                                    <option key={month} value={month}>{month}</option>)}
                                </select>
                                <span className="arrow-selector" id="month-arrow">v</span>
                                <select onChange={this.update("day")}>
                                    {DAYS.map(day => 
                                    <option key={day} value={day}>{day} </option>)}
                                </select>
                                <span className="arrow-selector" id="day-arrow">v</span>
                                <select onChange={this.update("year")}>
                                    {YEARS.map(year => 
                                    <option key={year} value={year}>{year}</option>)}
                                </select>
                                <span className="arrow-selector" id="year-arrow">v</span>
                            </label>
                                

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
                                {/* </div>

                                <div> */}

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
                                    <select id="optC"
                                        onChange={this.update("location")}>
                                        {COUNTRIES.map(location =>
                                            <option key={location} value={location}>{location}</option>)}
                                    </select>
                                    {/* <label htmlFor="optC" className="selector">
                                    <span className="arrow-selector">Country</span>
                                    <div>v</div> */}
                                    <span className="arrow-selector" id="country-arrow"></span>
                                </div>
                            </label>
                        </div>

                        <div className="statement">
                            <label className="checkbox-label">
                                <input type="checkbox"/>
                                <span className="checkbox-custom"></span>
                            </label>
                            <p className="word-of-mouth">
                                Yes, I would like to receive by word of mouth the latest news, innovation updates, and offers from TraceMyPace. NOT guaranteed.
                            </p>
                        </div>

                        <p className="privacy-policy">
                            By signing up with TraceMyPace, you agree to be nice to the poor website.
                        </p>

                        <div className="session-form">
                            <input className="signup-button"
                                type="submit"
                                value="SIGN UP" />
                            <div className="error">{this.renderErrors()}</div>
                        </div>
                        

                    </form>
                </div>
            </div>

            
        )
    }
}
export default SignUpForm;

// First name | Last name | Email | Password | Day, Month, Year | Male, Female | Location |