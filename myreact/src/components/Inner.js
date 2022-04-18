import { Link } from "react-router-dom";
import styles from "../css/Inner.module.css"

function Inner({img, title, summary, genres, like, rating, runtime, url}){
    return (
      <div>
        <div className={styles.first}>
          <Link to ={`/`}>
           ← &nbsp; Go first
          </Link>
        </div>
        <div className={styles.detailBox}>
          <div className={styles.dImgBox}>{img}</div>
          <div className={styles.contBox}>
            <p className={styles.title}>{title}</p>
            <div>{genres}</div>
            <span>Like {like} &nbsp; Rating {rating} &nbsp; runtime {runtime} &nbsp; url {url}</span>
            <p className={styles.summary}>{summary}</p>
          </div>
        </div>
      </div>
    );
}

export default Inner;