import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

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
  return (
    <div className="App">
      <h1>Total Countries : {countries.length}</h1>
      
        {
          countries.map(country => <Country countryInfo ={country}></Country>)
        }
      
    </div>
  );
}

export default App;
