import React from 'react';
// --country css --//
import './Country.css';

const Country = (props) => {
    // --destructuring ---//
    const {name,capital,flag} = props.countryInfo;

    const handleAddCountry = props.handleAddCountry;
    // console.log(handleAddCountry);
    
    return (
        <div className='country-container'>
            <h5>This is a {name}</h5>
            <img src={flag} alt=""/>
            <p>Capital : {capital}</p>
            <button onClick={() => handleAddCountry(props.countryInfo)}>Add country</button>
        </div>
    );
};

export default Country;