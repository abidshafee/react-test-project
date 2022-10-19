import React from "react";
import { useEffect } from "react";


const OMDbAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=262924cf";
SearchIcon = "./search-logo.svg"

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${OMDbAPI}&s=${title}`);
        const data = await response.json();
    }

    useEffect(() => {}, []);
    return (
        <div>
            <h1>My Test React App</h1>

            <div className="search">
                <input 
                placeholder="Search Here"
                value={"Search Value"}
                onChange={()=>{}}/>
                <img
                    src={SearchIcon}
                    alt="search"
                />

            </div>
        </div>
    );
};

export default App;