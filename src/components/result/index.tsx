import React, {FC, forwardRef} from "react"
import {Box, Container} from "@mui/material"
import {ICountries} from "../types"
import City from "../result/item"
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Search from "../search"

interface ResultProps {
    countries: ICountries[]
}

interface RowProps {
    index: number
    style: any
}

const innerElementType = forwardRef(({style, ...rest}: any, ref: any) => {
    return (
        <Container>
            <Search/>
            <div
                ref={ref}
                style={{...style, height: `${parseFloat(style.height) + 230 * 2}px`}}
                {...rest}
            />
        </Container>
    )
});
innerElementType.displayName = "insert"

const Result: FC<ResultProps> = ({countries}) => {
    const Row: FC<RowProps> = ({index, style}) => (
        <Box sx={{p: 2}} style={{
            ...style,
            top: `${parseFloat(style.top) + 230}px`,
            height: `${parseFloat(style.height) + 10}px`
        }}>
            <City city={countries[index]}/>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "98vh",
                    maxWidth: "100vw",
                }}
            >
                <AutoSizer>
                    {({height, width}) => (
                        <List
                            className="List"
                            height={height}
                            itemCount={countries.length}
                            itemSize={200}
                            innerElementType={innerElementType}
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
