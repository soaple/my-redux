import { useContext } from 'react';
import { ReduxContext } from '..';

function useDispatch() {
    const reduxContext = useContext(ReduxContext);
    return reduxContext.dispatch;
}

export default useDispatch;
