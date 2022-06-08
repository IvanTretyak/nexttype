import map from "lodash/map"
import {ICountries} from "../../types"

function filtered(array: ICountries[], value: string | undefined | null) {
    if (!value) {
        return array
    }
    let tempArray: ICountries[] = [];
    const valueArray = value.split("")
    const firstChar = valueArray[0].toUpperCase()
    valueArray[0] = firstChar
    const changedValue = valueArray.join('')
    map(array, (element) => {
        if (element.city.indexOf(changedValue) !== -1 || element.country.indexOf(changedValue) !== -1) {
            tempArray.push(element);
        }
    });
    return tempArray;
}

export default filtered
