import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";

const Likes = () => {
  const user = useSelector(state => state.user)

  let dataLikes = { data: [], isRoom: 0 };

  dataLikes = user.roomId.roomId !== ''
    ? { data: user.roomId.wholikesme, isRoom: 0 }
    : { data: user.wholikesme, isRoom: 1 };

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {dataLikes.data.map((user, index) => (
          <LikesCard key={index} user={user} isRoom={dataLikes.isRoom} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
