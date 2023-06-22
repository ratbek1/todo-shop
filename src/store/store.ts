import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ToDoSlice from "./Reducers/ToDoSlice";

const rootReducer = combineReducers({
    ToDoSlice
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]