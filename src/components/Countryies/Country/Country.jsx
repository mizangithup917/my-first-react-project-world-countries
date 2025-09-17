import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

  const [Visited, setVisted] = useState(false);

  // console.log(country)
  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    //  if (Visited){
    //   setVisted(false)

    //  }
    //  else{
    //   setVisted(true)
    //  }

    // setVisted (Visited ? false : true);

    setVisted(!Visited);
    handleVisitedCountries(country);

  }


  return (
    // <div className={` country ${Visited ? 'country-visited' : 'country-not-visited' }` }>
    <div className={`country ${Visited && 'country-visited'}`}> 
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <h3>Capital: {country.capital.capital}</h3>
      <h3>Region: {country.region.region}</h3>
      <h3>Population: {country.population.population}</h3>
      
      <h3>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small country"}</h3>
     
      <button onClick={handleVisited}>
        {Visited ? "Visited" : "Not Visited"}
      </button>
      <button className='btn-tow' onClick={() =>{ handleVisitedFlag(country?.flags?.flags?.png) }}>Add visited Flag</button>
    </div>
  );
};

export default Country;

// * 1. inline css (style object)                                                  // 