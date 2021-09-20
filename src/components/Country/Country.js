import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, population} = props.country;
    // console.log([name, flag, capital, population]);
    return (<div
                 className="card">
                <img src={flag} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{capital}</p>
                    <p className="card-text">{population}</p>
                </div>
            </div>
    );
};

export default Country;