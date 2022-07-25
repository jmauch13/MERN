import React from 'react';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';

export default function Education() {
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='education'>
            <h1>Continue Your Education</h1>
            <div classname='modal-popup'>
            <ModalScreen />
        </div>
        </div>
        </div>
        </body>
    );
}