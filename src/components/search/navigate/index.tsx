import React, {FC} from 'react';
import {Button, Stack} from "@mui/material"

const Navigate: FC = () => {
    return (
        <Stack direction="row" spacing={2} mt={3}>
            <Button variant='contained'>all</Button>
            <Button variant='contained'>selected</Button>
            <Button variant='contained'>random</Button>
        </Stack>
    );
};

export default Navigate;
