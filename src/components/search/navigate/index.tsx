import React, {FC} from 'react';
import {Button, Stack} from "@mui/material"
import {useAppDispatch,} from "../../../redux/hooks"
import {setShowFavorite} from "../../../redux/slice"

const Navigate: FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Stack direction="row" spacing={2} mt={3}>
            <Button onClick={() => dispatch(setShowFavorite(false))} variant='contained'>all</Button>
            <Button onClick={() => dispatch(setShowFavorite(true))} variant='contained'>selected</Button>
            <Button variant='contained'>random</Button>
        </Stack>
    );
};

export default Navigate;
