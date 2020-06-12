import React from 'react';
import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import {fetchRoutes} from '../../actions/route_actions';

const msp = state => {
    debugger;
    return {
        errors: state.errors.session,
        formType: "Sign Up",
        demoUser: {
            email: "testUser@gmail.com",
            password: "password"
        }
    };   
    // navLink: <Link to="/signup">LOG IN</Link>
};

// const msp = state => ({
//     errors: state.errors.session,
//     formType: "Sign Up"
// })


const mdp = dispatch => ({
    removeErrors: () => dispatch(removeErrors()),
    submitForm: user => dispatch(signup(user)),
    login: demoUser => dispatch(login(demoUser)),
    fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(msp, mdp)(SignUpForm);