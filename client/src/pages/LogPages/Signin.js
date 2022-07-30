import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../utils/mutations';
import logo from '../../assets/images/rocket-launch-icon.jpg';
import Auth from '../../utils/auth';
import '../../pages/LogPages/logs.css';

export default function Signin(props) {
    const [formState, setFormState ] = useState({ email: '', password: '' });
    const [signin, { error }] = useMutation(USER_LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target; 

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await signin({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.signin.token;
            Auth.login(token);
        } catch (e) {
            console.error(e);
        } 
    };

    return (
        <body className='log-page'>
      <div className='container'>
        <div className='text-center m-5-auto'>
        <img src={logo} alt="rocket" width='75' height='75' />
            <h2>Sign In</h2>
            <form onSubmit={formSubmit}>
                <p>
                    <label>Email</label><br/>
                    <input type='email' name='email' required value={formState.email} onChange={handleChange}/>
                </p>
                <p>
                    <label className='pass-label'>Password</label>
                    <Link to='/password'><label className='right-label'>Forget password?</label></Link>
                    <br/>
                    <input type='password' name='password' required value={formState.password} onChange={handleChange} />
                </p>
                <p>
                    <button id='sub_btn' type='submit' value="Signin">Login</button>
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