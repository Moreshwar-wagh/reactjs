import React, { useState } from 'react'

function Notes() {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [print, setPrint] = useState(false)
    const [count, setCount] = useState(0)

    const getTitle = (e) => {
        setTitle(e.target.value)
        setPrint(false)
        // console.log(e.target.value)
    }

    const getDescription = (e) => {
        setDescription(e.target.value)
        // console.log(e.target.value)
    }

    const button = (e) => {
        setPrint(true)
        e.preventDefault()
    }

    const remove = (e) => {
        setPrint(false)
        e.preventDefault()
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" onChange={getTitle} className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Add Comment</label>
                    <input type="description" onChange={getDescription} className="form-control" placeholder="Enter Comment" />
                </div>
                <button type="submit" onClick={button} className="btn btn-success">Save</button>
            </form>
            {
                print ?
                    <div><hr />
                        <div className='title'>{title.toUpperCase()}</div>
                        <button className='btn btn-primary buttonLike' onClick={() => setCount(count + 1)}>Like</button>
                        <span>{count} Likes</span>
                        <button className='btn btn-warning buttonDislike' onClick={() => setCount(count - 1)}>Dislike</button>
                        <button className='btn btn-danger buttonDelete' onClick={remove}>Delete</button>
                        <div className='description'>{description}</div>
                    </div> : <div><br /><br /><h2>No Data To Show...</h2></div>
            }
        </>
    )
}

export default Notes