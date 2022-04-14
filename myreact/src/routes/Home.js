import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import PropTypes from "prop-types";
import styles from "../css/Home.module.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
      )).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, [])
    console.log(movies);
  
    return (
      <div>
        {loading ? <h1>Loading...</h1> : 
        <div className={styles.totalBox}>
          {movies.map((movie) => (
            <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}/>
          ))}
        </div>
        }
      </div>
    );

    Movie.propTypes = {
        coverImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired
    }
}

export default Home;