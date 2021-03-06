import LikesCard from "../../components/LikesCard";
import { useSelector, useDispatch } from "react-redux";
import { changeChar } from "../../store/actions";
import styles from "./Likes.module.scss";
import { useState, useEffect } from "react";
import PlaceHolder from "../../components/PlaceHolder";
import Footer from "../../components/Footer/Footer";

const Likes = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [dataLikes, setDataLikes] = useState({ data: [], isRoom: null });

  useEffect(() => {
    user.roomId.roomId !== ""
      ? setDataLikes({ data: user.roomId.wholikesme, isRoom: 0 })
      : setDataLikes({ data: user.wholikesme, isRoom: 1 });

    user.newLike.length > 0 &&
      setTimeout(() => {
        dispatch(
          changeChar(
            [
              {
                propName: "newLike",
                value: [],
              },
            ],
            user._id
          )
        );
      }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    user.newLike.length,
    user.roomId.wholikesme.length,
    user.wholikesme.length,
  ]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.image}></div>
        <div className={styles.likesContainer}>
          <h3 className={styles.title}>These people like you!</h3>
          <div className={styles.cardContainer}>
            {dataLikes.data.map((currentData, index) => (
              <LikesCard
                key={index}
                data={currentData}
                isRoom={dataLikes.isRoom}
              />
            ))}
            {dataLikes.data.length === 0 ? <PlaceHolder /> : ""}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Likes;
