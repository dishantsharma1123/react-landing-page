import React from 'react'
import Image from '../img/section-cover.jpg';

const Menu = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row p-45'>
                    <div className='col-6'>
                        <div className='about-img about-img-shop'>
                            <img src={Image} alt='sewing_machine'></img>
                        </div>
                    </div>
                    <div className='col-6 image-pad-10'>
                        <h3>Choose your style</h3>
                        <h1>DRESS LIKE YOU ALWAYS WANTED TO BE</h1>
                        <p>
                            Choose among thousands of designs made by the top designers out there.
                        </p>
                        <button className='about-btn btn btn-smart'>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
