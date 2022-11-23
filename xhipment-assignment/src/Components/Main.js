import { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
    const [first, setFirst] = useState()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setFirst(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                first && first.map(first => <div key={first.id}>
                    <span>
                        {first.id}. {first.body}<hr />
                    </span></div>)
            }
        </div>
    )
}

export default Main