import { createContext } from 'react';
import PropTypes from 'prop-types';

export const ReduxContext = createContext();

export function Provider(props) {
    const { store, children } = props;

    return (
        <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
    );
}

Provider.propTypes = {
    store: PropTypes.shape({
        getState: PropTypes.func,
        subscribe: PropTypes.func,
        dispatch: PropTypes.func,
    }),
    children: PropTypes.element,
};
