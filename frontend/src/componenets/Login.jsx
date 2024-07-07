import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="username">
                username
                </label>
                <input type="text" name="username" id="username" placeholder='enter username'/>
            </div>
            <div>
                <label htmlFor="password">
                Password
                </label>
                <input type="text" name="password" id="password" placeholder='enter password'/>
            </div>
            <div>
                <button className='btn btn-primary' type='button'>Login</button>
                <button className='btn btn-primary' type='button'>Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default Login