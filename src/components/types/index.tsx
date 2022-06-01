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

export interface ICountriesString {
    data: string
}

export interface ICountries {
    city: string
    lat: string
    lng: string
    country: string
    population: string
}
