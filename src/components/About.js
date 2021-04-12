import React from 'react'
import Image from '../img/pexels.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                {/* <div className='row p-45'> */}
                <div className='row p-45'>
                    <div className='col-6'>
                        <h3>About Us</h3>
                        <h1>WELCOME TO REVA COLLECTIONS</h1>
                        <p>
                            We bring latest trendy designs right from our in-house fashion designers designed specially for you keeping in mind the traditional Indian ethnic wears.
                        </p>
                        <button className='about-btn btn btn-smart'>Read More</button>
                    </div>
                    <div className='col-6'>
                        <div className='about-img'>
                            <img src={Image} alt='sewing_machine'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
