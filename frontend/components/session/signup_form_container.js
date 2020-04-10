import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Sign Up",
    // navLink: <Link to="/signup">LOG IN</Link>
});

const mdp = dispatch => ({
    submitForm: user => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user))
});

export default connect(msp, mdp)(SignUpForm);