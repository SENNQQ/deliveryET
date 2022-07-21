export type shopCartItem = {
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

export type shopCartItems = {
    CartItems:shopCartItem[]
}

