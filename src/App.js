import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import CountryInformations from './components/CountryInformations/CountryInformations';

function App() {
  // --use state for storing data load --//
  const [countries, setCountries] = useState([]);

  // --data load or API load --//
  useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all';
      fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data))
      // --for handling api error find --//
      .catch(error => console.log(error))
    
  }, [])

  // --add country state--//
const [addCountry, setaddCountry] = useState([])
  // --add country event handler--//
 const handleAddCountry = (country) => {
  //  console.log('added',country);
   const newAddCountry = [...addCountry,country];
   setaddCountry(newAddCountry);

 }
   
  return (
    <div className="App">
      <h1>Total Countries : {countries.length}</h1>
      <CountryInformations addCountry={addCountry}></CountryInformations>
      
        {
          countries.map(country => <Country handleAddCountry={handleAddCountry} countryInfo ={country} ></Country>)
        }
      
    </div>
  );
}

export default App;
