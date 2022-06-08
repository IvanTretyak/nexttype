import axios, {AxiosResponse} from "axios";
import Papa from "papaparse";

async function fetchCountries() {
    const response = await axios.get<AxiosResponse>("https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv")
    const resData: any = response.data
    const resArray = Papa.parse(resData, {header: true})
    return resArray.data
}

export default fetchCountries
