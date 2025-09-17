import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'



const Countries = ({countriesPromise}) => {

  const [visitedFlags, setVistedFlags] = useState([]);

  const [visitedCountries, setVistedCountries] = useState([]);

  const handleVisitedCountries = (country) =>{
    console.log('handle visited country clicked', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVistedCountries(newVisitedCountries);
  }

  const handleVisitedFlag = (flag) =>{
    const newVisitedFlags = [...visitedFlags, flag]
    setVistedFlags(newVisitedFlags)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
 
  return (

    <div id='body'>
   
      <div className='hading-div'>
          <h1>In the Countries: {countries.length}</h1>
          <h2>Total Country Visited: {visitedCountries.length} </h2>
          <h2>Total Flags Visited: {visitedFlags.length}</h2>
      </div>


          <ol>
            {
              visitedCountries.map(country => <li
                key={country.cca3.cca3}>{country.name.common}</li>)
            }
          </ol>

          <div className='visited-flags-container'>
            {
              visitedFlags.map(flag => <img src={flag}></img>)
            }
          </div>

          <div className='countries'>
               {countries.map(country => <Country
                key={country.cca3.cca3}
                 country={country}
                 handleVisitedCountries={handleVisitedCountries}
                 handleVisitedFlag={handleVisitedFlag}
                 ></Country>) 
               }

          </div>

   

    </div>
  );
};

export default Countries;
