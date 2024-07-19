import {
    ACTION_TYPE_INCREMENT,
    ACTION_TYPE_DECREMENT,
} from '../actions/counterAction';

export const initialState = {
    count: 0,
};

function counterReducer(state = initialState, action) {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case ACTION_TYPE_INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case ACTION_TYPE_DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
}

export default counterReducer;
