import React from 'react';
import banner from '../../assets/images/HushiesLogo.png';

const HushiesBanner = () => {
    return (
        <div className='center'>
            <img src={banner} alt="Avatar" style={{width: "450px", height: "150px"}}/>
        </div>
    )
}
export default HushiesBanner;
