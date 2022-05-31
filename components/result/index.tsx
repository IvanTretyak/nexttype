import {FC} from "react"
import {Box} from "@mui/material"
import {IUser} from "../types"
import map from "lodash/map"
import User from "../result/itemList/item"

interface ResultProps {
    users: IUser[]
}

const Result: FC<ResultProps> = ({users}) => {
    return (
        <>
            <Box>
                {map(users, (user: IUser, index: number) => (
                    <Box key={index}>
                        <User user={user}/>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default Result
