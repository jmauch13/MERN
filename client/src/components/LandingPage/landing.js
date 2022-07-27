import React from 'react';
import './landing.css';
import image from '../../assets/images/rocket-background3.jpg';


function LandingPage() {
    return (
    <section className='landing mobile-view'>
        <div style={{ backgroundImage:`url(${image})`,backgroundSize:'cover' }}>
            
                    
            <div className='center' id='landing'>
                <h1 className='page-landing'>Beyond Boot Camp</h1>
                </div>
                
                
                
            <div className='center' id='about'>
                <p>
                    Welcome to the Beyond Boot Camp Blog! <br></br>Here you can find resourses for deciding your next move after Boot Camp. <br></br>
                    <br></br>The blog post areas are in convenient catagories so you can find the information you need, and you
                    can also contribute information to help others on their journey, too!
                </p>
            </div>
            </div>
        </section>
    );

}

export default LandingPage;