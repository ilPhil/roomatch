import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";
import { useState, useEffect } from "react";

const Likes = () => {
  const user = useSelector(state => state.user)

  const [dataLikes, setDataLikes] = useState({ data: [], isRoom: null });

  useEffect(() => {
    user.roomId.roomId !== ''
      ? setDataLikes({ data: user.roomId.wholikesme, isRoom: 0 })
      : setDataLikes({ data: user.wholikesme, isRoom: 1 });
  }, [user.roomId.roomId, user.roomId.wholikesme, user.wholikesme]);

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
