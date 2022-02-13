import LikesCard from "../../components/LikesCard";
import styles from "./Likes.module.scss";
import { wholikesme } from "./users.js";

const Likes = () => {
  return (
    <div className={styles.main}>
      <h4>Likes Page</h4>
      {wholikesme.map((user) => (
        <LikesCard user={user} />
      ))}
    </div>
  );
};

export default Likes;
