import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({id, coverImg, title, summary, genres}){
    return <div>
    <img src={coverImg} alt={title} />
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => 
        <li key={g}>{g}</li>
        )}
      </ul>
    </div>
  </div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;