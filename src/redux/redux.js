export function createStore(rootReducer) {
    let currentState = rootReducer();
    let listenerCount = 0;
    let listenerMap = {};

    return {
        getState: () => {
            return currentState;
        },
        subscribe: (listener) => {
            const listenerId = listenerCount++;
            listenerMap[listenerId] = listener;

            return function unsubscribe() {
                if (!listenerMap[listenerId]) {
                    return;
                }
                delete listenerMap[listenerId];
            };
        },
        dispatch: (action) => {
            currentState = rootReducer(currentState, action);

            Object.values(listenerMap).forEach((listener) => {
                listener();
            });

            return action;
        },
    };
}

export function combineReducers(reducerMap) {
    const reducerKeys = Object.keys(reducerMap);

    return function combination(state = {}, action) {
        let hasChanged = false;
        const nextState = {};
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducerMap[key];
            const prevStateForKey = state[key];
            const nextStateForKey = reducer(prevStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
        }
        hasChanged =
            hasChanged || reducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
