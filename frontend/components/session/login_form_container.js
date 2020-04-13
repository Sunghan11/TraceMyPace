import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import LogInForm from './login_form';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Log In",
    // navLink: <Link to="/signup">SIGN UP</Link>
});

const mdp = dispatch => ({
    submitForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(LogInForm);