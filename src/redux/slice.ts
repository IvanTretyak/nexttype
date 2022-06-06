import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICountries} from "../components/types"
import reject from "lodash/reject";

interface CountriesState {
    isLoading: boolean,
    userCount: number,
    favoriteCollection: ICountries[],
    userGuessTown: ICountries,
    variantCollection: ICountries[],
    showCollection: ICountries[],
    collection: ICountries[],
    searchValue: string,
    coordinates: string[],
    randomTown: ICountries,
    randomCoordinates: string[],
}

const initialState: CountriesState = {
    isLoading: false,
    userCount: 10,
    favoriteCollection: [{city: "", country: "", lat: "", lng: "", population: ""}],
    userGuessTown: {city: "", lat: "", lng: "", country: "", population: ""},
    variantCollection: [{city: "", country: "", lat: "", lng: "", population: ""}],
    showCollection: [{city: "", country: "", lat: "", lng: "", population: ""}],
    collection: [{city: "", country: "", lat: "", lng: "", population: ""}],
    searchValue: "",
    coordinates: ["1", "1"],
    randomTown: {city: "", country: "", lat: "", lng: "", population: ""},
    randomCoordinates: ["1", "1"],
}

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        onLoading: (state) => {
            state.isLoading = true
        },
        addToUserCount: (state) => {
            state.userCount += 1
        },
        takeAwayToUserCount: (state) => {
            state.userCount -= 2
        },
        putUserGuessTown: (state, action: PayloadAction<ICountries>) => {
            state.userGuessTown = action.payload;
        },
        putVariantCollection: (state, action) => {
            state.variantCollection = action.payload;
        },
        putRandomTown: (state, action) => {
            state.randomTown = action.payload;
        },
        putCollection: (state, action: PayloadAction<any>) => {
            state.collection = action.payload;
        },
        putSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        putFavoriteCities: (state, action) => {
            state.favoriteCollection.push(action.payload);
        },
        removeFavoriteCities: (state, action) => {
            state.favoriteCollection = reject(state.favoriteCollection, action.payload)
        },
        putShowCollection: (state, action) => {
            state.showCollection = action.payload;
        },
        putChoiceCoordinates: (state, action) => {
            state.coordinates = action.payload;
        },
        putRandomCoordinates: (state, action) => {
            state.randomCoordinates = action.payload;
        },
    },
});

export const {
    onLoading,
    addToUserCount,
    takeAwayToUserCount,
    putVariantCollection,
    putRandomTown,
    putUserGuessTown,
    putRandomCoordinates,
    putCollection,
    putSearchValue,
    putFavoriteCities,
    removeFavoriteCities,
    putShowCollection,
    putChoiceCoordinates,
} = countrySlice.actions;

export default countrySlice.reducer;
