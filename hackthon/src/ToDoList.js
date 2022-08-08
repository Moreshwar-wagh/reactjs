import React, { useState } from 'react'
import List from './List';

function ToDoList() {
    const [item, setItem] = useState("")
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value)
    }
    const list = () => {
        setNewItem((firstItem) => {
            return [...firstItem, item]
        })
        setItem("")
    }
    return (
        <div className='back' style={{ textAlign: "center" }}>
            <div className='center'><br />
                <form className='align-items-center'>
                    <div className="mb-3">
                        <label className="form-label" style={{ fontSize: "20px" }}>Type Your Note Here➤</label>
                        <input style={{ width: "50%" }} type="text" className="align-items-center" value={item} onChange={itemEvent} />
                    </div>
                </form>
                <button type="submit" style={{ marginBottom: "20px" }} className="btn btn-primary" onClick={list}> + </button>
                <br />
                <ol>
                    {newItem.map((val) => {
                        return <List text={val} />
                    })}
                </ol>
                <br />
            </div>
        </div>
    )
}

export default ToDoList;