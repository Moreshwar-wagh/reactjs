import React, { useState } from 'react'
import Cars from '../api/cars.json'


const CallApi = () => {
    const [searchTearm, setSearchTearm] = useState('')

    return (
        <div>
            <input className='search' type="search" placeholder='Enter Body Type...' onChange={e => { setSearchTearm(e.target.value) }} />
            {Cars.filter((cars) => {
                if (searchTearm == "") {
                    return cars
                } else if (cars.bodyType.toLowerCase().includes(searchTearm.toLowerCase())) {
                    return cars
                }
            }).map(cars => {
                return (
                    <>
                        <table>
                            <tr className='top'>
                                <th className='bodyType' key={cars.id}>
                                    {cars.bodyType}
                                </th>
                                <th className='belowBodytype'>
                                    <div className='name' key={cars.id}>{cars.modelName}</div>
                                    <span className='span'>{cars.modelType}</span>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className='images' key={cars.id}>
                                        <img src={cars.imageUrl} alt={cars.modelName} /><br />
                                    </div>
                                </td>
                            </tr>
                            <div>
                                <a href='/learn'>
                                    <button className='btn'>Learn {'>'}</button>
                                </a>
                                <a href='/shop'>
                                    <button className='btn'>Shop {'>'}</button>
                                </a>
                            </div><hr />
                        </table>

                    </>
                )
            })}
            <img className='arrow1' src='chevron-circled.svg' />
            <img className='arrow2' src='chevron-circled.svg' />
        </div>
    )
}

export default CallApi