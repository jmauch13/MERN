import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import logo from '../../assets/images/rocket-launch-icon.jpg';
import '../../components/LogPages/logs.css'

export default function Signup() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const formSubmit = async (event) => {
        event.preventDefault();

        try{
         const { data } = await addUser({
            variables: { ...formState },
        });

        Auth.login(data.addUser.token);
    } catch (e) {
        console.error(e);
    }
};
    return (
        <body className='log-page'>
    <div className='container'>
        <div className='text-center m-5-auto'>
        <img src={logo} width='75' height='75' />
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={formSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type='text' name='first_name' required value={formState.username} onChange={handleChange} />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type='email' name='email' required value={formState.email} onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type='password' name='password' required value={formState.password} onChange={handleChange}/>
                </p>
                <p>
                    <input type='checkbox' name='checkbox' id='checkbox' required /> <span>I agree all statements in <a href='https://google.com' target='_blank' rel='noopener noreferrer'>terms of service</a></span>.
                </p>
                <p>
                    <button id='sub_btn' type='submit'>Register</button>
                </p>
            </form>

            {error && <div>Failed to create user</div>}
            <footer>
                <p><Link to='/'>Back to Homepage</Link></p>
            </footer>
        </div>
        </div>
        </body>
    
    )

}