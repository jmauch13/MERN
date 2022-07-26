import React from 'react'
import { Link } from 'react-router-dom'

import './logs.css'

export default function ForgetPassword() {
    return (
        <body className='log-page'>
        <div className='container'>
        <div className='password'>
        <div className='text-center m-5-auto'>
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action='/login'>
                <p>
                    <label id='reset_pass_lbl'>Email</label><br/>
                    <input type='email' name='email' required />
                </p>
                <p>
                    <button id='sub_btn' type='submit'>Submit</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to='/signup'>Create an account</Link>.</p>
                <p><Link to='/'>Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
        </div>
        </body>
    )
}