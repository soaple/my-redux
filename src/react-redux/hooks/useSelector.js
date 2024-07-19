import { useContext, useSyncExternalStore } from 'react';
import { ReduxContext } from '..';

function useSelector(selector) {
    const reduxContext = useContext(ReduxContext);

    return useSyncExternalStore(reduxContext.subscribe, () =>
        selector(reduxContext.getState())
    );
}

export default useSelector;
