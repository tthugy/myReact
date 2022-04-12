import { useEffect, useState } from "react";
import styles from "./App.module.css";

function onChange(){
  console.log('hi');
};

function App() {
  
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    .then((response) => response.json()
    .then(json => setMovies(json.data.movies)));
  }, [])
  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        api
      </div>
      }
    </div>
  );
}

export default App;
