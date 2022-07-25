import React from 'react';
import './landing.css';
import image from '../../assets/images/space2.jpg';
import rocketImage from '../../assets/images/rocket.jpg';

function LandingPage() {
    return (
    <section className='landing'>
        <div style={{ backgroundImage:`url(${image})`,backgroundSize:"cover" }}>
            <div className='scene'>
                <div className='rocket'>
                    <div style={{ image:`url(${rocketImage})` }}>

                    </div>
                </div>
            </div>
                    
            <div className='center' id='landing'>
                <h1 className='page-header'>Beyond Boot Camp</h1>
                </div>
                
                
            <div className='center' id='about'>
                <p>
                    Welcome to the Beyond Boot Camp Blog! Here you can find resourses for deciding your next move after Boot Camp. 
                    We have blog posts in convenient catagories so you can find the information you need, and you
                    can also contribute information to help others on their journey, too!
                </p>
                </div>
                </div>
            </section>
    );
};


















export default LandingPage;