import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import logo from '../../assets/images/rocket-launch-icon.jpg';
import '../LogPages/logs.css'

export default function Signin(props) {
    const [formState, setFormState ] = useState({ email: '', password: '' });
    const [signin, { error }] = useMutation(USER_LOGIN);

    const handleChange = event => {
        const { name, value } = event.target; 

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await signin({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        } 

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <body className='log-page'>
      <div className='container'>
        <div className='text-center m-5-auto'>
        <img src={logo} width='75' height='75' />
            <h2>Sign In</h2>
            <form onSubmit={formSubmit}>
                <p>
                    <label>Email</label><br/>
                    <input type='text' name='first_name' required value={formState.email} onChange={handleChange} />
                </p>
                <p>
                    <label className='pass-label'>Password</label>
                    <Link to='/password'><label className='right-label'>Forget password?</label></Link>
                    <br/>
                    <input type='password' name='password' required value={formState.password} onChange={handleChange} />
                </p>
                <p>
                    <button id='sub_btn' type='submit'>Login</button>
                </p>
            </form>

            {error &&<div>Login failed, please try again</div>}
            <footer>
                <p>First time? <Link to='/signup'>Create an account</Link>.</p>
                <p><Link to='/'>Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
        </body>
    )
}