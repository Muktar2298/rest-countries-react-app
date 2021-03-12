import React from 'react';
// --country css --//
import './Country.css';

const Country = (props) => {

    // --destructuring ---//
    const {name,area,capital,flag,population,region} = props.countryInfo;
    // console.log(country);
    return (
        <div className='country-container'>
            <img src={flag} alt=""/>
            <p>{name}</p>
            <p>{area}</p>
            <p>{capital}</p>
            <p>{population}</p>
            <p>{region}</p>
        </div>
    );
};

export default Country;