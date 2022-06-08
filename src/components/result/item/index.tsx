import React, {FC, useCallback, useDeferredValue} from 'react';
import {Button, Grid, Paper, Stack, styled, Typography} from "@mui/material"
import {ICountries} from "../../types";
import HightLight from "../hightLight"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {putFavoriteCities, putShowTown, removeFavoriteCities} from "../../../redux/slice";
import checkTheSame from "../checktheSame"

interface CityProps {
    city: ICountries;
}

const StButton = styled(Button)(({theme}) => ({
    textTransform: "none",
    maxWidth: "170px",
    minWidth: "150px",
    "&:hover": {
        color: "#ffffff",
        backgroundColor: "#6E42CA",
    }
}))

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
            <Paper sx={{p: 4, background: "linear-gradient(90deg,#22163B,#1C1C33)"}}>
                <Grid container display="flex" justifyContent="space-between">
                    <Grid item xs={7}>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h4">{light(city.city)}</Typography>
                            <Typography color="text.secondary" variant="body1">{light(city.country)}</Typography>
                            <Typography color="text.secondary" variant="body1">{city.population}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="flex-end">
                        <Stack direction="column" spacing={2}>
                            <StButton onClick={() => dispatch(putShowTown(city))} variant="outlined">
                                See on map
                            </StButton>
                            {showFavorite ? <StButton
                                    onClick={() => {
                                        dispatch(removeFavoriteCities(city));
                                    }}
                                    variant="outlined"
                                >
                                    Move to bin
                                </StButton> :
                                checkTheSame(favoriteCities, city) ?
                                    <StButton onClick={() => dispatch(removeFavoriteCities(city))}
                                              variant="outlined">delete</StButton>
                                    :
                                    <StButton onClick={() => dispatch(putFavoriteCities(city))} variant="outlined">I
                                        want
                                        to visit</StButton>
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default City
