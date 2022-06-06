import React, {FC} from 'react';
import {Button, Grid, Stack, Typography} from "@mui/material"
import {ICountries} from "../../../types";

interface CityProps {
    city: ICountries;
}

const City: FC<CityProps> = ({city}) => {
    return (
        <>
            <Grid container display="flex" justifyContent="space-between">
                <Grid item xs={8}>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h1">{city.city}</Typography>
                        <Typography variant="h4">{city.country}</Typography>
                        <Typography variant="h5">{city.population}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="column" spacing={2}>
                        <Button variant="contained">See on map</Button>
                        <Button variant="contained">i want to visit</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default City
