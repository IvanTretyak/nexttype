import {FC, useEffect, useState} from "react"
import {Box, TextField} from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {putSearchValue, putShowCollection} from "../../../redux/slice";
import filtered from "../../result/filterByWord"

const SearchTextField: FC = () => {
    const [value, setValue] = useState<string | null | undefined>(null)
    const countries = useAppSelector((state) => state.country.showCollection)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(putSearchValue(value))
        dispatch(putShowCollection(filtered(countries, value)))
    }, [value])


    return (
        <>
            <Box>
                <TextField fullWidth variant="outlined"
                           onChange={(e) => {
                               setValue(e.target.value);
                           }}/>
            </Box>
        </>
    )
}
export default SearchTextField
