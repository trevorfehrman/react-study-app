import axios from 'axios';

import * as actions from './index';

let URL = 'https://lambda-study-app.herokuapp.com/api/auth';

export const register = (user) => dispatch => {
    dispatch({type: actions.SIGN_UP_SUCCESS});
    axios({
        method: 'post',
        url: `${URL}/register`,
        data: user,
    }).then(response => console.log(response));
}

export const login = (user) => dispatch => {
    dispatch({type: actions.SIGN_UP_SUCCESS});
    axios({
        method: 'post',
        url: `${URL}/login`,
        data: user,
    }).then(response => console.log(response));
}