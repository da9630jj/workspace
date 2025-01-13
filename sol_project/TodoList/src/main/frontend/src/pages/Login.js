import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='mainContainer'>

      <div className='loginContainer'>
        <h1>login</h1>
        <div className='loginContent'>
          <div className='idContent'>
            <span>Login ID : </span>
            <input type='text' placeholder='Input your ID' name='id'/>
          </div>
  
          <div className='idContent'>
            <span>Login PW : </span>
            <input type='password' placeholder='Input your PW' name='pw'/>
          </div>
        </div>
        <button>Login</button>
      </div>


      <div className='loginContainer'>
        <h1>Join</h1>
        <div className='loginContent'>
          <div className='idContent'>
            <span>Join ID : </span>
            <input type='text' placeholder='Input your ID' name='id'/>
          </div>
  
          <div className='idContent'>
            <span>Join PW : </span>
            <input type='password' placeholder='Input your PW' name='pw'/>
          </div>

          <div className='idContent'>
            <span>Name : </span>
            <input type='password' placeholder='Input your name' name='userName'/>
          </div>

          <div className='idContent'>
            <span>Email : </span>
            <input type='password' placeholder='Input your email' name='email'/>
          </div>
        </div>
        <button>Join</button>
      </div>



    </div>
  )
}

export default Login