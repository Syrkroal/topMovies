import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster/MoviePoster";
import axios from "axios";

import "./App.css";

function Home() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (!movies) getTopMovies();
    });

    async function getTopMovies() {
        console.log("fetching movies");
        const response = await axios.get(
            "http://localhost:4000/movies/popular"
        );
        if (response.data.error) return false;
        setMovies(response.data.movies);

        return true;
    }

    return (
        <div className="App">
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
