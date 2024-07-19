// Action Types
export const ACTION_TYPE_INCREMENT = 'increment';
export const ACTION_TYPE_DECREMENT = 'decrement';

// Action Creators
export function incrementActionCreator() {
    return {
        type: ACTION_TYPE_INCREMENT,
    };
}

export function decrementActionCreator() {
    return {
        type: ACTION_TYPE_DECREMENT,
    };
}
