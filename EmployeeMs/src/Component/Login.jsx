import React from 'react'
import './style.css'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
          <h2>Login Page</h2>
          <form>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" name='email' autoComplete='off'placeholder='Enter Email'
                className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" name='password' placeholder='Enter Password'
                className='form-control rounded-0'/>
            </div>
            <button className='btn btn-success w-100 rounded-0'>Submit</button>
            <div className='mb-3'>
                <input type="checkbox" name="tick" id="tick" />
                <label htmlFor="password"><strong>Password:</strong></label>
            </div>
            </form>  
        </div>
    </div>
  )
}

export default Login