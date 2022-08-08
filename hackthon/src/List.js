import React, { useState } from 'react'

export default function List(props) {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true)
    }
    return (
        <div className="card" style={{ width: "50%", margin: "auto", marginBottom: "10px" }}>
            <div className="card-body">
                <button onClick={cutIt} style={{ float: "right" }}>✔</button>
                <li style={{ textDecoration: line ? 'line-through' : "none" }}>{props.text}</li>
            </div>
        </div>
    )
}
