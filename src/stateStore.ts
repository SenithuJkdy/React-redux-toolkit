import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import IncDecReducer from "./reducers/IncDecSlice";

const store = configureStore({
    reducer: IncDecReducer   //convention is to to write the text preceding the word "Reducer"
    // Here you can enter your all reducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Writing these here to prevent defining the type in every file
export const useAppDispatch = ()=> useDispatch<AppDispatch>() // This is use to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
// Used to get the data from the store in the component

export default store




/*
* export type RootState = ReturnType<typeof store.getState>

export type RootState = This line defines a TypeScript type called RootState. This type represents the shape of the entire state managed by the Redux store.

ReturnType<typeof store.getState>: This uses TypeScript's ReturnType utility type to infer the return type of the getState method from the store. Essentially, it captures the structure of the state that the store holds, allowing you to use RootState throughout your application for type safety.

*/

/*  
* export type AppDispatch = typeof store.dispatch

export type AppDispatch = This line defines a TypeScript type called AppDispatch. This type represents the dispatch function of the Redux store.

typeof store.dispatch: This captures the type of the dispatch method from the store. By defining AppDispatch, you can use it in your application to ensure that you are dispatching actions correctly, providing type safety for the actions you send to the store.

*/



/* 
*
Step 2 — Creating a store
-> To store all the slices at a single place we need to create a store. 
-> We create a store using the configureStore API method. 
*/

// a state is a object {} that holds component data. whenever it changes the component will be re-renderd.

