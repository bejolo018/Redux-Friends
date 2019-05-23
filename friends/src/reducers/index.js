import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
    error: '',
    fetchingData: false,
    friends: []
};

const reducer = (state =intialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingData: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS: {
            return{
                ...state,
                fetchingData: false,
                friends: ''
            }
        }
        default:
            return state;
    }
}

export default reducer;