import React from 'react';

const MONTHS = ["Month",
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
const DAYS = [];
for (let i = 1; i < 32; i++) {
    DAYS.push(i);
};

const YEARS = [];
for (let i = 1900; i <= (new Date().getFullYear() - 12); i++) {
    YEARS.push(i)
}


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birth_date: '',
            gender: '',
            location_id: '',
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

    render () {

        
        const link = this.props.formType === 'Sign Up' ? <Link to="/login">LOG IN</Link> : <Link to="/signup">SIGN UP</Link>

        if (this.props.formType === 'Log in') {
            <div className="session-form">
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
                </form>
            </div>
        } else {

            <div className="session-form">
                <div id="navLink">{link}</div>
                <div className="errors-session">{this.renderErrors()}</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label"></label>
                        <input
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            type="text"
                            placeholder="First Name" />

                    </div>

                    <div className="form-group">
                        <label className="control-label"></label>
                        <input
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                            type="text"
                            placeholder="Last Name" />

                    </div>

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



                    <div className="form-group">
                        <label className="control-label"></label>
                        <input
                            value={this.state.birth_date}
                            onChange={this.update("birth_date")}
                            type="date"
                            placeholder="Birth Date" />

                    </div>

                    <div className="form-group">
                        <label className="control-label"></label>
                        <input
                            value={this.state.gender}
                            onChange={this.update("first_name")}
                            type="password"
                            placeholder="Password" />

                    </div>

                    <div className="form-group">
                        <label className="control-label"></label>
                        <input
                            value={this.state.location_id}
                            onChange={this.update("first_name")}
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

        };
    }
}

export default SessionForm;

// First name | Last name | Email | Password | Day, Month, Year | Male, Female | Location |