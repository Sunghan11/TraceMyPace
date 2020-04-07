import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => ({
    errors: errors.session,
    formType: "Sign Up",
    // navLink: <Link to="/signup">LOG IN</Link>
});

const mdp = dispatch => ({
    submitForm: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(SessionForm);