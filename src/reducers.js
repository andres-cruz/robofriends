import types from './types';

const initialState = {
    searchField: ''
}

export const searchRobot = (state= initialState, action= {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;            
    }
}