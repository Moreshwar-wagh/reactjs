import React, { useState } from 'react'

function Radio() {
  const [data, setData] = useState({
    name: '',
    email: '',
    description: '',
    country: '',
    gender: '',
    agree: '',
  })

  const handleOnChange = (e) => {
    const { value, name, type, checked } = e.target;
    setData((state) => ({
      ...state,
      [name]: type === 'checked' ? checked : value
    }))
  }

  const showData = () => {
    console.log(data)
  }

  const formSubmission = (e) => {
    showData()
    e.preventDefault()
  }


  return (
    <div>
      <form onSubmit={formSubmission}>
        <label>
          Name:
          <input className='form-control' name='name' placeholder='Enter name here...'></input>
        </label><br />
        <label>
          Email:
          <input className='form-control' type="email" name='email' placeholder='Enter email here...'></input>
        </label><br />
        <label>
          Description:
          <input className='form-control' name='Description' placeholder='Enter Description here...'></input>
        </label><br />
        <label>
          Phone Number:
          <input className='form-control' type="number" name='Description' placeholder='Enter Description here...'></input>
        </label><br />
        <label className='form-lable'>
          Country:
          <select className='form-select' onChange={handleOnChange}>
            <option value="india">India</option>
            <option value="dubai">Dubai</option>
            <option value="nepal">Nepal</option>
          </select>
        </label><br />
        <label className='form-lable'>
          Gender:
          <select className='form-select' onChange={handleOnChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label><hr />
        <label className='form-check-label'>
          Agree:
          <input type="checkbox" className='form-check-input' onChange={handleOnChange}></input>
        </label><br />
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default Radio