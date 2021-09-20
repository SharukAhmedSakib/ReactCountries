import React, { useEffect, useState } from 'react';
import  Country from '../Country/Country';

const Countries = () => {
    // step 1
    const [countries, setCountries] = useState([]);

    // step 2
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    },
    []);
    return (
        <div>
            <h1>Showing {countries.length} Countries</h1>
            <div className="row row-cols-3">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
