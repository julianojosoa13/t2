import { createSlice } from "@reduxjs/toolkit";
import { LocationObject } from "expo-location";

type FilterData = {
    name: string,
    id: string,
}
export const allCategory = { id: "all", name: "Toutes les catégories" } 
export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        description:"",
        category:allCategory  as FilterData & { imgPath?: string } | null,
        localisation: {
            country: "all" ,
            cities: ["all"] as string[],
            coords:null as LocationObject|null
        },
        duration:"recent",
        lastFilters:[] as any[],
        filteredData:null
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setCountry: (state, action) => {
            state.localisation.country = action.payload;
        },
        setCities: (state, action) => {
            state.localisation.cities = action.payload;
        },
        setCoords:(state, action)=>{
            state.localisation.coords=action.payload
        },
        addCity: (state, action) => {
            state.localisation.cities.push(action.payload);
        },
        removeCity: (state, action) => {
            state.localisation.cities = state.localisation.cities.filter(city => city !== action.payload);
        },
        setDuration:(state, action)=>{
            state.duration= action.payload
        },
        setDescription(state, action){
            state.description=action.payload
        },
        setFilters(state, action){
            state.category=action.payload.category
            state.localisation=action.payload.localisation
            state.duration=action.payload.duration
        },
        addLastFilter(state, action){
            state.lastFilters=[action.payload,...state.lastFilters].slice(0, 10)
        }
    },
});

export const { setCategory,setDescription,  setCountry, setCities, addCity, removeCity, setCoords, setDuration, setFilters, addLastFilter } = filterSlice.actions;
