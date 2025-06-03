import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../type";

export const authInitialState={
    user:null as null | IUser,
    accessToken:null as null | string
}
export const authSlice = createSlice({
    name:"auth",
    initialState:authInitialState,
    reducers:{
        setUser(store, action){
            store.user=action.payload
        },
        setAccessToken(store, action){
            store.accessToken=action.payload
        }
    }
})

export const {setUser, setAccessToken}=authSlice.actions