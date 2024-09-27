import axios from 'axios'
export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const addItem = item => async dispatch => {
    const response = await axios.post('/api/fridge', item)
    dispatch( { type: ADD_ITEM, payload: response.data});
}

export const getItems = () => async dispatch => {
    const response = await axios.get('/api/fridge');
    dispatch({ type: GET_ITEMS, payload: response.data })
}