import { Link } from "react-router-dom";
import styles from "../css/Inner.module.css"

function Inner(){
    return (
      <div>
        <div className={styles.first}>
          <Link to ={`/`}>
           ← &nbsp; Go first
          </Link>
        </div>
        <div className={styles.detailBox}>
          <div className={styles.dImgBox}>imgBox</div>
          <div className={styles.contBox}>
            <p className={styles.title}>movie title</p>
            <p className={styles.summary}>movie summary</p>
          </div>
        </div>
      </div>
    );
}

export default Inner;