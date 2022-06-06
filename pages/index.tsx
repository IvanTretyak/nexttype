import type {NextPage} from 'next'
import {useEffect} from "react"
import Result from "../src/components/result"
import {onLoading} from "../src/redux/slice";
import {useAppDispatch, useAppSelector} from "../src/redux/hooks"

export const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const showCountries = useAppSelector((state) => state.country.showCollection)


    useEffect(() => {
        dispatch(onLoading())
    }, [])

    return (
        <Result countries={showCountries}/>
    )
}
export default Home
