import React, {FC} from 'react';
import {Box, Stack, Typography} from "@mui/material"
import {IUser} from "../../../types";

interface UserProps {
    user: IUser;
}

const User: FC<UserProps> = ({user}) => {
    return (
        <Box sx={{border: "2px solid green", p: 3}}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h1">{user.name}</Typography>
                <Typography variant="h4">{user.email}</Typography>
                <Typography variant="h5">{user.phone}</Typography>
            </Stack>
        </Box>
    );
};

export default User
