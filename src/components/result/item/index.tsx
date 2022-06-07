import React, {FC, useCallback, useDeferredValue} from 'react';
import {Button, Grid, Stack, Typography} from "@mui/material"
import {ICountries} from "../../types";
import HightLight from "../hightLight"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {putFavoriteCities, putShowTown, removeFavoriteCities} from "../../../redux/slice";
import checkTheSame from "../checktheSame"

interface CityProps {
    city: ICountries;
}

const City: FC<CityProps> = ({city}) => {
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector((state) => state.country.searchValue)
    const favoriteCities = useAppSelector((state) => state.country.favoriteCollection)
    const showFavorite = useAppSelector((state) => state.country.showFavorite)
    const defferValue = useDeferredValue(searchValue)
    const light = useCallback((str: string) => {
        return (
            <HightLight fillString={defferValue} str={str}/>
        )
    }, [])

    return (
        <>
            <Grid container display="flex" justifyContent="space-between">
                <Grid item xs={8}>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h1">{light(city.city)}</Typography>
                        <Typography variant="h4">{light(city.country)}</Typography>
                        <Typography variant="h5">{city.population}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="column" spacing={2}>
                        <Button onClick={() => dispatch(putShowTown(city))} variant="contained">See on map</Button>
                        {showFavorite ? <Button
                                onClick={() => {
                                    dispatch(removeFavoriteCities(city));
                                }}
                                variant="contained"
                            >
                                Move to bin
                            </Button> :
                            checkTheSame(favoriteCities, city) ?
                                <Button onClick={() => dispatch(removeFavoriteCities(city))}
                                        variant="contained">delete</Button>
                                :
                                <Button onClick={() => dispatch(putFavoriteCities(city))} variant="contained">i want to
                                    visit</Button>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default City
