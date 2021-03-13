import React from 'react';

const CountryInformations = (props) => {
    // console.log(props);
    // --destructuring--//
    const addCountry = props.addCountry;
    // console.log(addCountry);

    // --using for loop--//
    // let totalPopulations = 0;
    // for (let i = 0; i < addCountry.length; i++) {
    //     const country = addCountry[i];
    //     totalPopulations += country.population;  
    // }

    // --using reduce()--// N.B-ata for loop er motoi but onk powerful --//
    const totalPopulations =addCountry.reduce((sum, country) => sum + country.population,0)

    return (
        <div>
            <h1>Informations</h1>
            <p>Added country: {addCountry.length}</p>
            <p>Total Populations: {totalPopulations}</p>
        </div>
    );
};


export default CountryInformations;