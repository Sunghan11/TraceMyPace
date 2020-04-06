import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    //   //TESTING
    //   window.fetchBenches = fetchBenches
    //   window.login = login;
    //   window.getState = store.getState;
    //   window.dispatch = store.dispatch;
    //   //TESTING
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }

    const root = document.getElementById('root');
    ReactDOM.render(<h1>TraceMyPace </h1>, root);
});