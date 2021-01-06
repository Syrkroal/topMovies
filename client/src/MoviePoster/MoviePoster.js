import "./MoviePoster.css";
import { useHistory } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function MoviePoster(props) {
    let history = useHistory();
    const movie = props.movie;

    function gotoDetails() {
        history.push("/details", { movie: movie });
    }

    return (
        <div className="movie-container" onClick={gotoDetails}>
            <img
                className="movieImg"
                src={imgPath + movie.poster_path}
                alt="Poster"
            />
            <div className="movie-title">{movie.title}</div>
        </div>
    );
}

export default MoviePoster;
