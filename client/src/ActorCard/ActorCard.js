import "./ActorCard.css";
import { useHistory } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function ActorCard(props) {
    let history = useHistory();
    const actor = props.actor;

    return (
        <div className="actor-container">
            <img
                className="actor-img"
                src={imgPath + actor.profile_path}
                alt="Poster"
            />
            <div className="actor-name-container">
                <div className="actor-character">{actor.character}</div>
                <div className="actor-name">{actor.name}</div>
            </div>
        </div>
    );
}

export default ActorCard;
