import { createSlice } from "@reduxjs/toolkit";

// define the blueprprint of the slice
interface IncDecInitialStateType {
    currentNumber: number;   // the type of initial state of slice.
}  

// define the initial state of the slice
const initialState: IncDecInitialStateType = {
    currentNumber: 0
}

const IncDecSlice = createSlice({
    name: "incDecSlice", // must be unique for every slice. convention is to put the same as file name
    initialState,  // initial state of the slice provide as a parameter
    reducers: {
        incrementNumber: (state) => {
            state.currentNumber += 1;
        },
        decrementNumber: (state) => {
            state.currentNumber -= 1;
        },
        incrementUserValue: (state, action) => {
            state.currentNumber += action.payload;
        },
        decrementUserValue: (state, action) => {
            state.currentNumber -= action.payload;
        },
        resetValue: (state) =>{
            state.currentNumber = 0;
        }
    } // action methods
})

// Export actions
export const IncDecServices = {
    actions: IncDecSlice.actions  //This includes all the action methods written above
}

const IncDecReducer = IncDecSlice.reducer  //This is stored in the main store

// Export reducer
export default IncDecReducer


/**
    Step 1 — Create a slice
    What is slice? A slice is portion of redux that relates to specific set of data & actions within the store’s state. It is a collection of redux reducer, actions and state for a single feature in your application.
 **/


/**
 * IncDecSlice - A Redux Toolkit slice for managing a simple counter state.
 * 
 * This slice centralizes the logic for incrementing and decrementing a numerical value,
 * allowing components to update the state in a structured and predictable manner.
 * 
 * Features:
 * - `incrementNumber`: Increases the current number by 1.
 * - `decrementNumber`: Decreases the current number by 1.
 * - `incrementUserValue`: Increases the current number by a specified value.
 * - `decrementUserValue`: Decreases the current number by a specified value.
 * 
 * The state is managed using Redux Toolkit's `createSlice`, which simplifies reducer logic
 * and automatically generates actions. This approach ensures efficient state updates while
 * keeping the codebase modular and maintainable.
 */


