import {ICountries} from "../../types"

function checkTheSame(array: ICountries[], searchingObject: ICountries) {
    const found = array.find(element => element.city === searchingObject.city)
    if (found === undefined) {
        return false
    } else {
        return true
    }
}

export default checkTheSame
