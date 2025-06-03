import { createSlice } from "@reduxjs/toolkit";

export const userLocalDefault = {
    eventCalendars: {} as { [x: string]: string },
    pageData:{}  as { [x: string]: string },
}
export const userLocalSlice = createSlice({
    name: "userLocal",
    initialState: userLocalDefault,
    reducers: {
        setPageData(store, action){
            store.pageData=action.payload
        },
        appendPageData(store, action){
            store.pageData={...store.pageData, ...action.payload}
        },
        setNewCalendarEvent(store, action) {
            store.eventCalendars[action.payload.eventId] = action.payload.calendarId
        },
        deleteCalendarEvent(store, action) {
            delete store.eventCalendars[action.payload.eventId]
        }
    }
})

export const { setNewCalendarEvent, deleteCalendarEvent, setPageData, appendPageData } = userLocalSlice.actions