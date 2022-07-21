export type productType = {
    _id: string,
    image: string,
    title: string,
    subtitle?:string,
    weight: number,
    description: string,
    price: number,
    count:number,
    store:string
}

export type products = {
    product:productType[],
    status:StatusType
}

export enum StatusType {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}