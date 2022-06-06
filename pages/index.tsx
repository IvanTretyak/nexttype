import type {NextPage} from 'next'
import {useEffect} from "react"
import Result from "../src/components/result"
import {onLoading} from "../src/redux/slice";
import {useAppDispatch, useAppSelector} from "../src/redux/hooks"


export const Home: NextPage = () => {
    const countries = useAppSelector((state) => state.country.collection)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(onLoading())
    }, [])
    return (
        <Result countries={countries}/>
    )
}
export default Home
