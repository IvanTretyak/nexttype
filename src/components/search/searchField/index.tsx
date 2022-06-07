import {FC, useEffect, useState} from "react"
import {Box, TextField} from "@mui/material"
import {useAppDispatch} from "../../../redux/hooks";
import {putSearchValue} from "../../../redux/slice";

const SearchTextField: FC = () => {
    const [value, setValue] = useState<string | null | undefined>(null)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(putSearchValue(value))
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
