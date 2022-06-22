import {CHANGE_THEME} from './actions'

const initialState = {
    darkMode: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, darkMode: !state.darkMode }
        default:
            return state
    }
}

export default userReducer