import api from "./api/api";
import {useEffect, useState} from "react";


function App() {
    const [users, setUsers] = useState()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users')
                setUsers(response.data)
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        fetchUsers()
    }, [])

    return (
        users && users.map(user => {
            return (
                <div key={user.id}>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                    <p>{user.address.suite}</p>
                </div>
            )
        })
    )
}

export default App;
