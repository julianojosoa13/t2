export interface IResponseData<T>{
    result:T|null,
    errors:any
}
const eventLocation ={
    "KW": [
        {
            "id": "083664f1-7cf0-4178-aafe-366c482a6cf3",
            "name": "Brockton",
            "type": "city",
            "country": "KW",
            "createdAt": "2025-02-20T05:39:21.000+00:00",
            "updatedAt": "2025-02-20T05:39:21.000+00:00"
        }
    ],
}
export interface IEventLocation{
    id:string,
    name:string,
    type:string,
    country:string,
    createdAt:string,
    updatedAt:string
}

export interface IEventLocationResponse{
    [countryISO2code:string]:IEventLocation[]
}