// store.ts

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reduxtoolkit/counterSlice';

export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

export default store;