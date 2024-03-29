import React from 'react'

function SessionLength(props) {
    const increaseSession = () => {
        if (props.sessionLength === 60) {
            return
        }
        props.increaseSession()
    }
    const decreaseSession = () => {
        if (props.sessionLength === 1) {
            return
        }
        props.decreaseSession()
    }
    return (
        <section>
            <h4>Session Time</h4>
            <section className='interval-container'>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>Down</button>
                <p className='interval-lenth'>{props.sessionLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>Up</button>
            </section>
        </section>
    )
}

export default SessionLength