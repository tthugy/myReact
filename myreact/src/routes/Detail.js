import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Inner from "../components/Inner.js";

function Detail(){
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(details);
    return (
        <div>
          {details.map((detail) => (
            <Inner
            key={detail.id}/>
          ))}
        </div>
    );
}

export default Detail;