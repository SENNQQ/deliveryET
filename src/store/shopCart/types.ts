export type shopCartItem = {
    id: number,
    image: string,
    title: string,
    subTitle?: string,
    weight?: number,
    description?: string,
    price: number,
    count?:number
}

export type shopCartItems = {
    CartItems:shopCartItem[]
}

