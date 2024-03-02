// actions.ts

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction;

export function incrementCounter(): IncrementCounterAction {
  return { type: INCREMENT_COUNTER };
}

export function decrementCounter(): DecrementCounterAction {
  return { type: DECREMENT_COUNTER };
}