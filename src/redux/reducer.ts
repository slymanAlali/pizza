// reducers.ts

import { combineReducers } from "redux";
import { CounterActionTypes, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./action";
import AppState from "./state";

function counterReducer(state = 0, action: CounterActionTypes): number {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers<AppState>({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;