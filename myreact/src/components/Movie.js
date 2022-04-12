import { Link } from "react-router-dom";

function Movie({coverImg, title, summary, genres}){
    return <div>
    <img src={coverImg} alt={title} />
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
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

export default Movie;