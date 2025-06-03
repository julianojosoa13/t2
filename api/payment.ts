import axios from "axios"
import { API_BASE, API_URL } from "./url"
import { handleAxiosResponseEror } from "../helpers"
import { IPaymentAddress, IPaymentMethod, IPaymentMethodType } from "../data/store/type"

export async function getPaymentMethods(): Promise<{
    resume: IPaymentMethod[],
    methodTypes: IPaymentMethodType[]
}> {
    try {
        const { data } = await axios.get(API_BASE + '/payments/methods')
        return data
    } catch (e) {
        throw handleAxiosResponseEror(e)
    }
}

export async function getUserPaymentAddresses(): Promise<IPaymentAddress[]> {
    try {
        const { data } = await axios.get(API_BASE + '/payments/methods/me')
        return data
    } catch (e) {
        throw handleAxiosResponseEror(e)
    }
}



export async function createUserPaymentAdress(props: {
    "paymentMethodId": string,
    "address": string
}): Promise<IPaymentAddress> {
    try {
        const { data } = await axios.post(API_BASE + "/payments/methods/me", {
            ...props
        })
        return data
    } catch (e) {
        throw handleAxiosResponseEror(e)
    }
}


export async function updateUserPaymentAdress(props: {
    "paymentMethodId": string,
    "address": string,
    "id":string
}): Promise<IPaymentAddress> {
    try {
        const { data } = await axios.put(API_BASE + "/payments/methods/me/edit/"+props.id, {
            ...props
        })
        return data
    } catch (e) {
        throw handleAxiosResponseEror(e)
    }
}


export async function deleteUserPaymentAdress(props: {
    "id":string
}) {
    try {
        await axios.delete(API_BASE + "/payments/methods/me/"+props.id)
    } catch (e) {
        throw handleAxiosResponseEror(e)
    }
}



interface IInitPayment{
   invoiceId:string
}
export async function initPayment(invoiceId:string){
    try{
        const {data}=await axios.post(API_BASE+"/payments/invoice/"+invoiceId+"/init", {})
        return data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}


export async function verifyTransactionStatus(invoiceId:string){
    try{
        const {data}=await axios.get(API_BASE+"/payments/invoice/"+invoiceId, {})
        return data
    }catch(e){
        throw handleAxiosResponseEror(e)
    }
}