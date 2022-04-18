import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Inner from "../components/Inner.js";
import PropTypes from "prop-types";
import styles from "../css/Detail.module.css";

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
        <div className={styles.dBox}>
            <Inner
            img={details.background_image}
            title={details.title_long}
            summary={details.description_intro}
            genres={details.genres}
            like={details.like_count}
            rating={details.rating}
            runtime={details.runtime}
            url={details.url}
            />
        </div>
    );
}

export default Detail;