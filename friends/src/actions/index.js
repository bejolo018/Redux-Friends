import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

const baseURL = 'http://localhost:5000/api';

export const login = creds => dispatch => {
    dispatch({
      type: LOGIN_START
    });
    return axios
      .post(`${baseURL}/login`, creds)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  export const getData = () => dispatch => {
    dispatch({
      type: FETCH_DATA_START
    });
    axios
      .get(`${baseURL}/data`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  