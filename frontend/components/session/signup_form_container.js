import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Sign Up",
    demoUser: {
        email: "testUser@gmail.com",
        password: "password"
    }
    // navLink: <Link to="/signup">LOG IN</Link>
});

const mdp = dispatch => ({
    submitForm: user => dispatch(signup(user)),
    removeErrors: errors => dispatch(removeErrors(errors)),
    login: user => dispatch(login(user))
});

export default connect(msp, mdp)(SignUpForm);