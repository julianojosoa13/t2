import { createSlice } from "@reduxjs/toolkit";

export const configInitialState={
    deviceId:null as null | string
}
export const configSlice = createSlice({
    name:"config",
    initialState:configInitialState,
    reducers:{
        setDeviceId(store, action){
            store.deviceId=action.payload
        }
    }   
})

export const {setDeviceId}=configSlice.actions