import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../App.css";
import "./MovieDetail.css";
import ActorCard from "../ActorCard/ActorCard";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function MovieDetail() {
    const location = useLocation();
    const movie = location.state.movie;

    const [detail, setDetail] = useState(null);
    const [actors, setActors] = useState(null);
    const [genres, setGenres] = useState("");

    useEffect(() => {
        if (!detail) getMovieDetail();
        if (!actors) getMovieActors();
    });

    async function getMovieDetail() {
        const response = await axios.get(
            "http://localhost:4000/movies/info/" + movie.id
        );
        if (response.data.error) return false;

        setDetail(response.data.infos);
        let tmp = "";
        for (let i = 0; i < response.data.infos.genres.length; i++) {
            tmp += response.data.infos.genres[i].name + ", ";
        }
        setGenres(tmp.slice(0, -2));

        return true;
    }

    async function getMovieActors() {
        const response = await axios.get(
            "http://localhost:4000/movies/cast/" + movie.id
        );
        if (response.data.error) return false;
        setActors(response.data.cast);
        console.log(response.data.cast.length);

        return true;
    }

    function buyTicket() {
        return;
    }

    return (
        <div className="movie-detail-container-center">
            <div className="movie-detail-container">
                <div className="movie-detail-info-container">
                    <img
                        className="movie-detail-img"
                        src={imgPath + movie.poster_path}
                        alt="Poster"
                    />
                    <div className="movie-detail-info">
                        <div className="movie-detail-header">
                            <p className="movie-detail-title bold">
                                {movie.title}
                            </p>
                            <div className="movie-date-genres">
                                <p>Released: {movie.release_date}</p>
                                <p>Genres: {genres}</p>
                            </div>
                            <p className="bold">Rating</p>
                            <p>{movie.vote_average} / 10</p>
                            <p className="bold">Overview</p>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="buy-button" onClick={buyTicket}>
                            Purchase Ticket
                        </div>
                    </div>
                </div>

                <div className="movie-detail-actors">
                    <div className="actors-title">Actors</div>
                    {actors && actors.length > 0 && (
                        <div className="actors-container">
                            {actors.map((actor, index) => {
                                return <ActorCard key={index} actor={actor} />;
                            })}
                        </div>
                    )}
                    {actors &&
                        actors.length === 0 &&
                        "No actors for this movie"}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
