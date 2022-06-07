import React, {FC} from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import SimpleMap from "../swipDrawer/googleMaps"
import {setShowModal} from "../../redux/slice";

const SwipDrawer: FC = () => {
    const dispatch = useAppDispatch()
    const showModal = useAppSelector((state) => state.country.showModal)
    const list = () => (
        <Box
            onKeyDown={() => dispatch(setShowModal(false))}
        >
            <SimpleMap/>
        </Box>
    );
    return (
        <>
            <SwipeableDrawer
                open={showModal}
                anchor={"bottom"}
                onClose={() => dispatch(setShowModal(false))}
                onOpen={() => dispatch(setShowModal(true))}
            >
                {list()}
            </SwipeableDrawer>
        </>
    );
}
export default SwipDrawer
