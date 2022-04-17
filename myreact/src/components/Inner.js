import { Link } from "react-router-dom";
import styles from "../css/Inner.module.css"

function Inner(){
    return (
      <div claaName={styles.innerBox}>
        <div className={styles.first}>
          <Link to ={`/`}>
           ← &nbsp; Go first
          </Link>
        </div>
        <div className={styles.detailBox}>
          <p className={styles.title}>123123</p>
        </div>
      </div>
    );
}

export default Inner;