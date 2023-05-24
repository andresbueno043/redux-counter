import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})

//Must be exported to make sure we can use this functions
export const { increment, decrement } = counterSlice.actions;

//Must be exported because the store will need it.
export default counterSlice.reducer;