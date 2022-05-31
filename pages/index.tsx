import {useEffect, useState} from "react"
import type {NextPage} from 'next'
import {Container} from "@mui/material"
import axios from "axios"
import {IUser} from "../components/types"
import Result from "../components/result"

export const Home: NextPage = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Container>
            <Result users={users}/>
        </Container>
    )
}
export default Home
