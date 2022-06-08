import React, {FC, useEffect} from 'react';
import {Button, Stack, styled} from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../../redux/hooks"
import {putShowTown, setShowFavorite, setShowModal} from "../../../redux/slice"
import {ICountries} from "../../types"
import SwipDrawer from "../../swipDrawer";

export function getRandomTown(array: ICountries[]) {
    const randomCity = Math.floor(Math.random() * array.length)
    console.log(array[randomCity])
    return (array[randomCity])
}

const StyleButton = styled(Button)(({theme}) => ({
    textTransform: "none",
    color: theme.palette.text.secondary,
    minWidth: "100px",
    borderRadius: "30px",
    backgroundColor: "#1C1C33",
    "&:hover": {
        color: "#ffffff",
        backgroundColor: "#1C1C33",
    }

}))

const Navigate: FC = () => {
    const allCollection = useAppSelector((state) => state.country.collection)
    const showModal = useAppSelector((state) => state.country.showModal)
    const showTown = useAppSelector((state) => state.country.showTown)
    const dispatch = useAppDispatch()
    useEffect(() => {
        showTown.city && dispatch(setShowModal(true));
    }, [showTown])
    return (
        <>
            <Stack direction="row" spacing={2} mt={3}>
                <StyleButton onClick={() => dispatch(setShowFavorite(false))} variant='contained'>all</StyleButton>
                <StyleButton onClick={() => dispatch(setShowFavorite(true))} variant='contained'>selected</StyleButton>
                <StyleButton onClick={() => dispatch(putShowTown(getRandomTown(allCollection)))}
                             variant='contained'>random</StyleButton>
            </Stack>
            <SwipDrawer/>
        </>
    );
};

export default Navigate;
