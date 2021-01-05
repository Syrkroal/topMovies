import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail";
import Home from "./Home";

function App() {
    // const [movies, setMovies] = useState(null);

    // useEffect(() => {
    //     if (!movies) getTopMovies();
    // });

    // async function getTopMovies() {
    //     console.log("fetching movies");
    //     const response = await axios.get(
    //         "http://localhost:4000/movies/popular"
    //     );
    //     setMovies(response.data.movies);
    // }

    return (
        <BrowserRouter>
            {/* <div className="App-content"></div> */}
            <Switch>
                <Route exact path="/details" component={MovieDetail} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
