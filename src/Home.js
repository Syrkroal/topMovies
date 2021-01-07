import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster/MoviePoster";
import axios from "axios";
import { url } from "./API/API";

import "./App.css";

function Home() {
    const [movies, setMovies] = useState(null);
    const [category, setCategory] = useState("toprated");

    useEffect(() => {
        if (!movies) getTopMovies();
    });

    useEffect(() => {
        getTopMovies();
    }, [category]);

    async function getTopMovies() {
        const response = await axios.get(url + "/movies/" + category);

        if (response == null || response.data.error) return false;
        setMovies(response.data.movies);

        return true;
    }

    function handleChange(event) {
        console.log(event.target.value);
        setCategory(event.target.value);
    }

    return (
        <div className="App">
            <div className="picker">
                <select value={category} onChange={handleChange}>
                    <option value="toprated">Top Rated</option>
                    <option value="popular">Popular</option>
                </select>
            </div>
            <div className="App-container">
                {movies &&
                    movies.map((movie, index) => {
                        return <MoviePoster key={index} movie={movie} />;
                    })}
            </div>
        </div>
    );
}

export default Home;
