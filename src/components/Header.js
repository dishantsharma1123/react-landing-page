import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='banner'>
            <Navbar />
            <div className='banner-content'>
                <div className='container'>
                    <div className='banner-text'>
                        <h3 className='brand-intro'>fashion outfits at affordable price</h3>
                        <h1 className='brand-name'>REVA COLLECTIONS</h1>
                        <p className='brand-desc'>
                            latest trendy designs right from our in-house fashion designers designed specially for you keeping in mind the traditional Indian ethnic wears.
                        </p>
                        <button className='banner-btn btn btn-smart'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
