/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useReducer } from 'react';

type CounterState = {
    count: number
};
// type CounterAction = {
//     type: 'increment' | 'decrement' | 'reset';
//     payload: number 
// }
type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number,
}
type ResetAction = {
    type: 'reset',
    // payload: number
}
 type CounterAction = UpdateAction | ResetAction;
const initialState = {
    count: 0
}

const reducer = (state:CounterState, action:  CounterAction) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.payload
            }
        case "decrement":
            return {
                    count: state.count - action.payload
            }
        case "reset":
            return initialState;
    
        default:
            return state
    }
}

const Counter = () => {

    const[state, dispatch] = useReducer(reducer,initialState)
    return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 10})}>
            increment
            </button>
        <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
            decrement
            </button>
         <button onClick={() => dispatch({type: 'reset'})}>
            reset
            </button>

        
    </div>
  )
}

export default Counter