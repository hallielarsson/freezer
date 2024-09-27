import { ADD_ITEM, GET_ITEMS } from "../actions/fridgeActions";
const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload]};
        case GET_ITEMS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}