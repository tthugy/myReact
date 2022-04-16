import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
    return <div className={styles.box}>
    <img className={styles.mainImg} src={coverImg} alt={title} />
    <div className={styles.inner}>
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`}>🫧 &nbsp;{title}</Link>
      </h2>
      <div className={styles.contents}>
        <div className={styles.innerTxt}>
        {summary}
        </div>
      </div>
      <ul className={styles.genres}>
        {genres.map(g => 
        <li key={g}>☁︎ &nbsp;{g}</li>
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