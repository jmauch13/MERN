import React from 'react';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';


export default function Intern() {
    return (
        <body className='blog-pages'>
            <div className='wrapper'>
                <div className='intern'>
                <h1>Apprenticeships & Internships &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
                <div className='modal-popup'>
                <ModalScreen />
            </div>
        </div>
    </div>
</body>
    );
}