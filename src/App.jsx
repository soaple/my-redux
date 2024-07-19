import {
    incrementActionCreator,
    decrementActionCreator,
} from './redux/actions/counterAction';
import useSelector from './react-redux/hooks/useSelector';
import useDispatch from './react-redux/hooks/useDispatch';

function App() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
            }}>
            <p>count: {count}</p>

            <button
                onClick={() => {
                    dispatch(incrementActionCreator());
                }}>
                INCREASE
            </button>
            <button
                onClick={() => {
                    dispatch(decrementActionCreator());
                }}>
                DECREASE
            </button>
        </div>
    );
}

export default App;
