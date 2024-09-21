import React from 'react';
import {NavLink} from 'react-router-dom';
const CountryCard = ({ country }) => {
  // Destructure the properties from the country object
  const { flags, name, population, region, capital } = country;

  return (
    <li className='country-card border p-4 rounded shadow'>
      <div>
        {/* Display the flag image */}
        <img src={flags.svg} alt={flags.alt} className="w-full h-32 object-cover rounded mb-4" />

        {/* Display country information */}
        <div className="country-info space-y-2">
          {/* Common Name */}
          <p>
            <span className="font-semibold">Common name: </span>
            {name.common}
          </p>

          {/* Official Name */}
          <p>
            <span className="font-semibold">Official Name: </span>
            {name.official}
          </p>

          {/* Capital */}
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>

          {/* Region */}
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>

          {/* Population */}
          <p>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString()}
          </p>

<p>

          <NavLink to={`/country/${name.common}`}>
          <button>Know More</button>
          </NavLink>
</p>

          

          
        </div>
        
      </div>
      
    </li>
  );
};

export default CountryCard;