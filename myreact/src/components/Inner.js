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
          <div className={styles.dImgBox}><img src={img} /></div>
          <div className={styles.contBox}>
            <p className={styles.title}>{title}</p>
            <div>Genres {genres}</div>
            <span>👍 {like} &nbsp; ⭐️ {rating} &nbsp; 🎬 {runtime} minutes &nbsp;</span>
            <p className={styles.summaryTitle}>Storyline</p>
            <p className={styles.summary}>{summary}</p>
          </div>
        </div>
      </div>
    );
}

export default Inner;