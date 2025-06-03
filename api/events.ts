import axios, { AxiosError } from "axios"
import { API_BASE } from "./url"
import { handleAxiosResponseEror } from "../helpers"
import { IEvent } from "../data/store/type"
import { IEventLocationResponse } from "./type"
import { fi } from "date-fns/locale"
export const getCategories = async () => {
    try{
        const {data:result}=await axios.get(API_BASE + '/events/categories')
        return result
    }catch(e:any){
        throw handleAxiosResponseEror(e)
    }
}

export const getEventLocations = async ():Promise<IEventLocationResponse> => {
    try{
        const {data}=await axios.get(API_BASE + '/events/locations')
        return data
    }catch(e:any){
        throw handleAxiosResponseEror(e)
    }
}

export interface IFilterEventData{
    duration?:"recent"|"week"|"month"|[string,string],
    locationCountry?:string,
    categoryId?:string,
    coords?:[number, number],
    description?:string,
    cities?:string[]
}
export const getFilteredEvents=async (filterData?:IFilterEventData):Promise<{data:IEvent[]}>=>{
    try{
        const filterStringData=[]
        if(filterData?.categoryId){
            filterStringData.push(filterData.categoryId ? "categoryId="+filterData.categoryId:"")
        }
        if(filterData?.coords){
            filterStringData.push("coords="+ filterData.coords.join(","))
        }
        if(filterData?.locationCountry){
            filterStringData.push("locationCountry="+ filterData.locationCountry)
        }
        if(filterData?.duration){
            filterStringData.push("duration="+(typeof(filterData.duration)==="string" ? filterData.duration : filterData.duration.join(",")))
        }
        if(filterData?.description){
            filterStringData.push("description="+filterData.description)
        }
        const {data}=await axios.get(API_BASE + '/events'+(filterStringData.length ? "?"+filterStringData.join("&"):""))
        return data
        
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}

export async function getEvent(id:string){
    try{
        return (await axios.get(API_BASE + '/event/'+id)).data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}

interface ICreateInvoiceData{
    tickets: {
        ticketId: string;
        quantity: number;
    }[];
    paymentMethodId: string;
}
export async function createInvoice(requestData:ICreateInvoiceData):Promise<{id:string}>{
    try{
        const {data}=await axios.post(API_BASE+"/payments/invoice/create", requestData)
        return data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}





