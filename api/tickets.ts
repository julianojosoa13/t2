import axios from "axios"
import { handleAxiosResponseEror } from "../helpers"
import { API_BASE, API_URL } from "./url"
import { IEvent, IEventBase, ITicket } from "../data/store/type";

export async function getMyTicketEvents(context="all"):Promise<IEventBase[]>{
    try{
        const {data}=await axios.get(`${API_BASE}/tickets/me?context=${context}`);
        return data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}

export async function getMyTickets(eventId:string):Promise<ITicket[]>{
    try{
        const {data}=await axios.get(`${API_BASE}/tickets/me/${eventId}`);
        return data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}