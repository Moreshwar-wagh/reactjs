import React, { useEffect, useState } from 'react'
import Card from './Card'

function Users() {
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        (async () => {
            let userData
            try {
                const response = await fetch('https://api.github.com/users')
                userData = (await response.json())
            } catch (error) {
                console.log(error)
                userData = []
            }

            setAllUsers(userData)
            setUsers(userData)
        })()
    }, [])

    const filterInfo = (e) => {
        const value = e.target.value.toLowerCase()
        const filterdUsers = allUsers.filter(
            user => (`&{user.login}`
                .toLowerCase()
                .includes(value))
        )

        setUsers(filterdUsers)
    }

    return (
        <div>
            <h1>Information</h1>
            <input className='search-box' placeholder='Search' onInput={filterInfo} />
            <div className='cards-container'>
                {
                    users.map((user, index) => (
                        <Card userData={user} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Users