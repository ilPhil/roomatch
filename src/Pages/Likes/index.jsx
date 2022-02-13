import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";
// import { wholikesme } from "./users.js";

const Likes = () => {
  const user = useSelector(state => state.user)

  return (
    <div className={styles.main}>
      <h3>Your likes</h3>
      <div className={styles.cardContainer}>
        {user.wholikesme.map((user, index) => (
          <LikesCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
