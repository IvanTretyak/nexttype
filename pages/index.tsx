import type {NextPage} from 'next'
import {useEffect} from "react"
import Result from "../src/components/result"
import {onLoading, putShowCollection} from "../src/redux/slice";
import {useAppDispatch, useAppSelector} from "../src/redux/hooks"
import filtered from "../src/components/result/filterByWord"

export const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const showCountries = useAppSelector((state) => state.country.showCollection)
    const showFavorite = useAppSelector((state) => state.country.showFavorite)
    const countries = useAppSelector((state) => state.country.collection)
    const searchValue = useAppSelector((state) => state.country.searchValue)
    const favoriteCities = useAppSelector((state) => state.country.favoriteCollection)
    useEffect(() => {
        dispatch(onLoading())
    }, [])
    useEffect(() => {
        !showFavorite && dispatch(putShowCollection(filtered(countries, searchValue)))
        showFavorite && dispatch(putShowCollection(filtered(favoriteCities, searchValue)))
    }, [, searchValue, showFavorite, favoriteCities])
    return (
        <>
            <Result countries={showCountries}/>
        </>
    )
}
export default Home
