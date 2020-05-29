import React from 'react';
import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "Sign Up",
        demoUser: {
            email: "testUser@gmail.com",
            password: "password"
        }
    };   
    // navLink: <Link to="/signup">LOG IN</Link>
};

const mdp = dispatch => ({
    removeErrors: () => dispatch(removeErrors()),
    submitForm: user => dispatch(signup(user)),
    login: demoUser => dispatch(login(demoUser))
});

export default connect(msp, mdp)(SignUpForm);