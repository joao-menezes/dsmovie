import MovieStars from "components/MovieStars";
import './styles.css'


function MovieScore() {

    const score = Math.random()*5;
    const count = (Math.random()*100).toFixed(0);

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;