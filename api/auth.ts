import axios from "axios"
import { API_URL } from "./url"
import { IResponseData } from "./type"
import { handleAxiosResponseEror, transformAxiosRequestError } from "../helpers";
import { store } from "../data/store";
import { setAccessToken, setUser } from "../data/store/reducers/auth";
import { IUser } from "../data/store/type";

interface IVerifyPhoneNumberData {
    phone: string,
    context: "auth:verification",
}

interface IVerifyPhoneNumberReponse {
    message?: string;
    data: {
        retryAt: string;
    };
}

export async function verifyPhoneNumber(data: IVerifyPhoneNumberData): Promise<IResponseData<IVerifyPhoneNumberReponse>> {
    let result:IVerifyPhoneNumberReponse|null = null
    let errors = null
    try {
        const {data:response} = await axios.post(API_URL + '/api/auth/otp/generate', data)
        result=response
    } catch (e: any) {
        errors = e?.response?.data
    }
    return { result:errors && errors.data ? {data:errors.data}  : result, errors }
}
interface IvalidateOtp{
    code:string,
    phone:string,
    context:string,
    resetDeviceId?:boolean
}
export async function validateOTP(data:IvalidateOtp){
    
    try{
        const {data:result}=await axios.post(API_URL + '/api/auth/otp/verify', data)
        return {result}
    }catch(e:any){
        return {error:handleAxiosResponseEror(e)}
    }

}

export async function getAvatars(){
    const {data}=await axios.get(API_URL+"/api/avatars")   
    return data
}

export interface ICreateUserAccountData{
    lastname: string;
    phone: string;
    firstname: string;
    gender: string;
    birthdate: string;
    avatarId?: string;
    profileImage?: File
    password?: string;
    passwordReapeat?: string;
}
export async function createUserAccount(data:ICreateUserAccountData){
    try{
        const formData=new FormData()
        formData.append("lastname", data.lastname)
        formData.append("phoneNumber", data.phone)
        formData.append("firstname", data.firstname)
        formData.append("gender", data.gender)
        if(data.password)formData.append("password", data.password);
        if( data.passwordReapeat)formData.append("passwordReapeat", data.passwordReapeat);
        formData.append("birthdate", data.birthdate)    
        if(data.avatarId) formData.append("avatarId", data.avatarId);
        if(data.profileImage) formData.append("profileImage", data.profileImage);
        const {data:response}=await axios.post(`${API_URL}/api/auth/accounts/customer`, formData, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        return response
        
    }catch(e){
        throw {error:handleAxiosResponseEror(e)}
    }
}

interface IAuthenticateCustomerData{
    phone:string
}
interface IAuthenticateCustomerResponse{
    message: string;
    accessToken: string;
    user:IUser
}

export async function authenticateCustomer(data:IAuthenticateCustomerData){
    try{
        const {data:response}=await axios.post<IAuthenticateCustomerResponse>(`${API_URL}/api/auth/authenticate/customer`, data)
        
        return {result:response}
    }catch(e){
        return {error:handleAxiosResponseEror(e)}
    }   
}