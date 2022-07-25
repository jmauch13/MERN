import React from 'react'
import { Link } from 'react-router-dom'

import '../../components/LogPages/logs.css'

export default function Signin() {
    return (
        <body className='log-page'>
      <div className='container'>
        <div className='text-center m-5-auto'>
            <h2>Sign In</h2>
            <form action='/home'>
                <p>
                    <label>Email</label><br/>
                    <input type='text' name='first_name' required />
                </p>
                <p>
                    <label className='pass-label'>Password</label>
                    <Link to='/password'><label className='right-label'>Forget password?</label></Link>
                    <br/>
                    <input type='password' name='password' required />
                </p>
                <p>
                    <button id='sub_btn' type='submit'>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to='/signup'>Create an account</Link>.</p>
                <p><Link to='/'>Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
        </body>
    )
}