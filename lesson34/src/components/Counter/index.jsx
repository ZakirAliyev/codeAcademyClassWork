import {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {counter: state.counter + 1};
        case 'decrement':
            if (state.counter > 0) {
                return {counter: state.counter - 1};
            } else {
                return state;
            }
        case 'reset':
            return {counter: 0};
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <>
            <button onClick={() => dispatch({type: 'decrement'}, state)}>-</button>
            <button>{state.counter}</button>
            <button onClick={() => dispatch({type: 'increment'}, state)}>+</button>
            <button onClick={() => dispatch({type: 'reset'}, state)}>reset</button>
        </>
    );
}

export default Counter;
