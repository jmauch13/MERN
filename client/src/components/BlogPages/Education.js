import React from 'react';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function Education() {
    return (
        <body className='blog-pages'>
        
            
        
                
            <div className='wrapper'>
                <div className='education'>
                <h1>Continue Your Education &nbsp;<img src={logo} width='75' height='75' /></h1>
                <div classname='modal-popup'>
                <ModalScreen />
            </div>
        </div>
    </div>
</body>

    );
}