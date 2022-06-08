import {Box} from "@mui/material"
import {FC} from "react"

const HightLight: FC<any> = ({fillString, str}) => {
    if (!fillString) return str
    const regExp = new RegExp(fillString, "ig")
    const matchValue = str.match(regExp)
    if (matchValue) {
        return str.split(regExp).map((symbol: any, index: any, array: any) => {
            if (index < array.length - 1) {
                const c = matchValue.shift()
                return (<Box key={index} component="span">{symbol}<Box component="span"
                                                                       sx={{
                                                                           borderRadius: "5px",
                                                                           backgroundColor: "secondary.main",
                                                                       }}>{c}</Box></Box>)
            }
            return symbol
        })
    }
    return str
}
export default HightLight
