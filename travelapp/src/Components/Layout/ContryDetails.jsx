import React, { useEffect, useState, useTransition } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LOader from '../UI/LOader';
import { getCountryIndData } from '../../api/postApi';

const ContryDetails = () => {
    const params = useParams();
    const [country, setCountry] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            try {
                const response = await getCountryIndData(params.id);
                if (response.status === 200) {
                    setCountry(response.data[0]);
                } else {
                    setError('Failed to fetch country details.');
                }
            } catch (err) {
                setError('An error occurred while fetching the country details.');
                console.error("Fetch error:", err);
            }
        });
    }, [params.id , startTransition]);

    console.log(country);

    if (isPending) {
        return <LOader />;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!country) {
        return <h1>No country data available.</h1>;
    }

    return (
        <main className="country-details">
    <div className="country-container container">
        <div className="flag-container">
            {country.flags?.png ? (
                <img src={country.flags.png} alt={country.name?.official || "Country Flag"} className="country-flag" />
            ) : (
                <div>No Image Available</div>
            )}
        </div>
        <div className="info-container">
            <h1 className="country-name">{country.name?.official || "Unknown Country"}</h1>
            <p className="common-name">Common Name: {country.name?.common}</p>
            <p className="capital">Capital: {country.capital?.[0] || "No Capital Available"}</p>
            <p className="region">Region: {country.region}</p>
            <p className="subregion">Subregion: {country.subregion}</p>
            <p className="population">Population: {country.population}</p>
            <p className="languages">Languages: {Object.values(country.languages).join(', ')}</p>
            <p className="currencies">Currencies: {Object.keys(country.currencies).join(', ')}</p>
        </div>
        
            <NavLink to={"/countries"}><button>Go Back</button></NavLink>
        
    </div>
</main>

    );
};

export default ContryDetails;
