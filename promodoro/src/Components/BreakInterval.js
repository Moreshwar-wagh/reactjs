import React from 'react'

function BreakInterval(props) {
    const decreaseCounter = () => {
        if (props.breakInterval === 1) {
            return
        }
        props.decreaseBreak()
    }
    const increaseCounter = () => {
        if (props.breakInterval === 60) {
            return
        }
        props.increaseBreak()
    }

    return (
        <section>
            <h4>Break</h4>
            <section className='interval-container'>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
                <p className='interval-lenth'>{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>up</button>
            </section>
        </section>
    )
}

export default BreakInterval