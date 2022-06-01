import React, {FC} from "react"
import {Box, Stack, Typography} from "@mui/material"
import {ICountries} from "../types"
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface ResultProps {
    countries: ICountries[]
}

interface RowProps {
    index: number
    style: any
}

const Result: FC<ResultProps> = ({countries}) => {
    const Row: FC<RowProps> = ({index, style}) => (
        <Box sx={{border: "2px solid green", p: 3}} style={style}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h1">{countries[index].city}</Typography>
                <Typography variant="h4">{countries[index].country}</Typography>
                <Typography variant="h5">{countries[index].population}</Typography>
            </Stack>
        </Box>
    );


    return (
        <>
            <Box mt={10} height="70vh">
                <AutoSizer>
                    {({height, width}) => (
                        <List
                            className="List"
                            height={height}
                            itemCount={countries.length}
                            itemSize={200}
                            width={width}
                        >
                            {Row}
                        </List>
                    )}
                </AutoSizer>
            </Box>
        </>
    )
}
export default Result
