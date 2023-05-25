import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})


//Setup the root state type
export type RootState = ReturnType<typeof store.getState>

//App Dispatch
export type AppDispatch = typeof store.dispatch