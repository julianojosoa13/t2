import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { configSlice } from "./reducers/config";
import { dataSlice } from "./reducers/data";
import { filterSlice } from "./reducers/filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLocalSlice } from "./reducers/userLocal";

export let store: any

export const initStore = (preloadedState: {
    auth?: any,
    config?: any,
    userLocal?:any
}) => {
    store = configureStore({
        reducer: {
            [authSlice.reducerPath]: authSlice.reducer,
            [configSlice.reducerPath]: configSlice.reducer,
            [dataSlice.reducerPath]: dataSlice.reducer,
            [filterSlice.reducerPath]: filterSlice.reducer,
            [userLocalSlice.reducerPath]:userLocalSlice.reducer
        },
        preloadedState: {
            auth: preloadedState?.auth,
            config: preloadedState?.config,
            userLocal: preloadedState?.userLocal,
        }
    });

    store.subscribe(() => {
        const state = store?.getState()
        AsyncStorage.setItem("store", JSON.stringify({
            auth: state.auth,
            config: state.config,
            userLocal:state.userLocal
        }))

    })
    return store
}



// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']