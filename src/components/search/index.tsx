import React, {FC} from 'react';
import {Box} from "@mui/material"
import SearchTextField from "../search/searchField"
import Navigate from "../search/navigate"

const Search: FC = () => {
    return (
        <Box mt={10}>
            <SearchTextField/>
            <Navigate/>
        </Box>
    );
};

export default Search;
