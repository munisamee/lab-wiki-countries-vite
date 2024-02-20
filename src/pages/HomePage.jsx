import { useState, useEffect } from "react";
import jsonData from "../data.js";
import axios from 'axios';

function HomePage() {
    const [countries, setCountries] = useState (jsonData);

    useEffect (() => {
        setCountries(jsonData);
    }, [jsonData]);

    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mt-5">WikiCountries: Your Guide to the World</h1>
              <ul>
            {countries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      );
    };
    
    export default HomePage;



