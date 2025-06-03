import { PAYMENT_METHODS } from "../../config/payment";

interface Media {
    context: string;
    createdAt: string;
    id: string;
    name: string;
    url: string;
}
export interface IUser {
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    currency: string;
    phone: string;
    email: string;
    gender: string;
    birthday: string;
    profileImageId: null;
    profileImage?: IMedia,
    createdAt: string;
    updatedAt: string;
    merchantProfileVerified: boolean | null
}

export interface ICategory {
    id: string;
    name: string;
    imgPath: string;
    createdAt: string;
    updatedAt: string;
}

export interface ILocationTown {
    id: string;
    name: string;
    type: string;
    country: string;
    createdAt: string;
    updatedAt: string;
}

export interface IMedia {
    id: string;
    name: string;
    path: string;
    storage: string;
    type: string;
    context: string;
    createdAt: string;
    updatedAt: string;
    url: string;
    colorHash?: string
}
export type IEventMedia= IMedia& {isPrimaryImage:boolean|number}
export type IEvent=IEventBase &IEventAdditionnals
export interface IEventBase {
    id: string;
    title: string;
    description: string;
    startAt: string;
    endAt: string;
    placeName: string;
    locationTownId: string;
    categoryId: string;
    createdByUserId: string;
    createdAt: string;
    updatedAt: string;
    maxAllowedTickets: number;
    issuedTicketsCount: number;
    commentCount: number;
    totalCommentNotations: number;
    likesCount: number;
    didILiked?: boolean
    remainingTickets: number | null;
    locationTown: ILocationTown;
    medias: IEventMedia[];
    createdByUser?: IUser,
    merchantProfileVerified?: boolean,
    
}

export interface IEventAdditionnals{
    ticketTypes?: ITicket[],
    invitees?: IInvitee[],
    score: number | string,
    totalComment: number | string,
    locationCoords?: {
        latitude: number;
        longitude: number;
    },
    category: ICategory;
    scoring?: {
        score: number;
        totalAvg: number;
        total: number;
    }[],
}

export interface IInvitee {
    id: string;
    name: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    media?: IMedia,
    category?: InviteesCategory
}

export interface ITicketType {
    id: string;
    name: string;
    price: string;
    eventId: string;
    createdAt: string;
    updatedAt: string;
}
export interface ITicket {
    id: number;
    invoiceId: string;
    eventId: string;
    userId: string;
    ticketTypeId: string;
    ticketType:ITicketType
    ticketCode: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}


interface InviteesCategory {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}


export type IPaymentMethod = {
    methodType: string;
    minPaymentFeesRate: string;
    maxPaymentFeesRate: string;
}


export interface IPaymentMethodType{
    id: string;
    name: string;
    methodType: string;
    isActivated: number;
    description: string;
    country: string;
    paymentFeesRate: number;
    providerClassName: string;
    mediaId: string;
    createdAt: string;
    updatedAt: string;
    should_redirect: number;
    media:IMedia

}

export interface IPaymentAddress {
    id: string;
    address: string;
    paymentMethodId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    paymentMethod: IPaymentMethodType
}

