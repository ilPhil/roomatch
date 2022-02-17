import styles from "./LandingPageBody.module.scss";
import { Link } from "react-router-dom";
import place from "./../../libs/img/LPBody/place.png";
import price from "./../../libs/img/LPBody/price.png";
import match from "./../../libs/img/LPBody/match.png";

const Body = () => {
  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.sections}>
        <div className={styles.place}>
          <img src={place} alt="place logo" />
          <h2>A perfect place</h2>
          <p>
            Create your personal roommate profile and get started in minutes!
            Get specific with things like pet preferences, room features,
            neighborhood details, and more.
          </p>
        </div>
        <div className={styles.price}>
          <img src={price} alt="price logo" />
          <h2>A perfect price</h2>
          <p>
            Create your personal roommate profile and get started in minutes!
            Get specific with things like pet preferences, room features,
            neighborhood details, and more.
          </p>
        </div>
        <div className={styles.match}>
          <img src={match} alt="match logo" />
          <h2>A perfect match</h2>
          <p>
            Create your personal roommate profile and get started in minutes!
            Get specific with things like pet preferences, room features,
            neighborhood details, and more.
          </p>
        </div>
      </div>
      <div className={styles.getBtn}>
        <Link to={"/registration"}>Get your match!</Link>
      </div>
    </div>
  );
};

export default Body;
