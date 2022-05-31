interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
}
