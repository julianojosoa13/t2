import { createSlice } from "@reduxjs/toolkit"
import { ICategory } from "../type"
import { IEventLocationResponse } from "../../../api/type"
export const dataInitialState={
    categories:null as null | ICategory[],
    eventLocations:null as null | IEventLocationResponse,
    filteredData:null as null | IEventLocationResponse,
}
export const dataSlice = createSlice({
    name:"data",
    initialState:dataInitialState,
    reducers:{
        setCategories(store, action){
            store.categories=action.payload
        },
        setEventLocations(store, action){
            store.eventLocations=action.payload
        },
        setFilteredEvents(store, action){
            store.filteredData=action.payload
        },
    }   
})

export const {setCategories,setEventLocations, setFilteredEvents}=dataSlice.actions