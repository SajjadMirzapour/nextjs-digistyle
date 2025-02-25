// class AddToUserBasketParam {
//     username: string;
//     basket: string[]
// }

interface AddToUserBasketParam {
    username: string;
    basket: string[]
}

export type AddToUserBasket = (param: AddToUserBasketParam) => Promise<void | { message: string }>;
