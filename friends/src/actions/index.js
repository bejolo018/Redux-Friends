import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
    return axios
        .post('http://localhost:5000')
        .then( res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => console.log(error))
}

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCH_FRIENDS});
    axiosWithAuth()
        .get('/api/data')
        .then(res => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_PRICES_FAILURE })
        })
}