import {FC, useEffect, useState} from "react"
import {Box, styled, TextField} from "@mui/material"
import {useAppDispatch} from "../../../redux/hooks";
import {putSearchValue} from "../../../redux/slice";

export const StyledTextField = styled(TextField)(({theme}) => ({
    backgroundColor: "#1C1C33",
    borderRadius: "10px",
    fontSize: 17,
    "&:hover": {},
    '& label.Mui-focused': {
        fontSize: 17,
    },
    '& .MuiOutlinedInput-root': {
        // color: theme.palette.text.secondary,
        '& fieldset': {},
        '&:hover fieldset': {
            borderColor: '#6E42CA',
        },
        "&:focused": {
            color: theme.palette.text.secondary,
        },
    },
    '&.Mui-error': {
        color: theme.palette.error.main,
    },
}));

const SearchTextField: FC = () => {
    const [value, setValue] = useState<string | null | undefined>(null)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(putSearchValue(value))
    }, [value])


    return (
        <>
            <Box>
                <StyledTextField sx={{}} fullWidth variant="outlined"
                                 onChange={(e) => {
                                     setValue(e.target.value);
                                 }}/>
            </Box>
        </>
    )
}
export default SearchTextField
