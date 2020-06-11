import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import LogInForm from './login_form';
import { fetchRoutes } from '../../actions/route_actions';

const msp = state => ({
    errors: state.errors.session,
    routes: state.entities.routes,

    formType: "Log In",
    demoUser: {
        email: "testUser@gmail.com",
        password: "password"
    }

    // navLink: <Link to="/signup">SIGN UP</Link>
});

const mdp = dispatch => ({
    submitForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(msp, mdp)(LogInForm);