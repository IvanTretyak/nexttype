import React, {FC, useEffect} from 'react';
import {Button, Stack} from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks"
import {putShowTown, setShowFavorite, setShowModal} from "../../../redux/slice"
import {ICountries} from "../../types"
import SwipDrawer from "../../swipDrawer";

export function getRandomTown(array: ICountries[]) {
    const randomCity = Math.floor(Math.random() * array.length)
    console.log(array[randomCity])
    return (array[randomCity])
}

const Navigate: FC = () => {
    const allCollection = useAppSelector((state) => state.country.collection)
    const showModal = useAppSelector((state) => state.country.showModal)
    const showTown = useAppSelector((state) => state.country.showTown)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setShowModal(true));
    }, [showTown])
    return (
        <>
            <Stack direction="row" spacing={2} mt={3}>
                <Button onClick={() => dispatch(setShowFavorite(false))} variant='contained'>all</Button>
                <Button onClick={() => dispatch(setShowFavorite(true))} variant='contained'>selected</Button>
                <Button onClick={() => dispatch(putShowTown(getRandomTown(allCollection)))}
                        variant='contained'>random</Button>
            </Stack>
            <SwipDrawer/>
        </>
    );
};

export default Navigate;
