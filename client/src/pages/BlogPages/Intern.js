import React from 'react';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';

export default function Intern() {
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='intern'>
            <h1>Apprenticeships & Internships</h1>
            <div classname='modal-popup'>
            <ModalScreen />
        </div>
        </div>
        </div>
        </body>
    );
}