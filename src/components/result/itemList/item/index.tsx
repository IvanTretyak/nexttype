import React, {FC} from 'react';
import {Box, Stack, Typography} from "@mui/material"
import {ICountries} from "../../../types";

interface CityProps {
    city: ICountries;
}

const City: FC<CityProps> = ({city}) => {
    return (
        <Box sx={{border: "2px solid green", p: 3}}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h1">{city.city}</Typography>
                <Typography variant="h4">{city.country}</Typography>
                <Typography variant="h5">{city.population}</Typography>
            </Stack>
        </Box>
    );
};

export default City
