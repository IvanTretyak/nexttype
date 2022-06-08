interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface TResponse {
    data: ICountries[]
}

export interface ISearchValue {
    value: string
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
