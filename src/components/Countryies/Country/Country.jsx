import React from 'react';
import './Country.css'

const Country = ({ country }) => {
  console.log(country.languages.languages)
  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Region: {country.region.region}</h3>
      <h3>Population: {country.population.population}</h3>
      <h3>Capital: {country.capital.capital}</h3>
      <h3>Area: {country.area.area}</h3>
      <h3>Name: {country.name.common} </h3>
    </div>
  );
};

export default Country;

// * 1. inline css (style object)                                                  // 