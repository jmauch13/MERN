import React from 'react';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';

export default function JobTalk() {
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='jobs'>
            <h1>Job Resources</h1>
            <div classname='modal-popup'>
            <ModalScreen />
        </div>
        </div>
        </div>
        </body>
    );
}